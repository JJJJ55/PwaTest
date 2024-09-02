import React, { useEffect } from "react";
import styled from "styled-components";
import $ from "jquery";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
};

const Map = () => {
  const { kakao } = window;
  useEffect(() => {
    // const container = document.getElementById("map");
    // const options = {
    //   center: new kakao.maps.LatLng(33.450701, 126.570667),
    //   level: 3,
    // };
    // const map = new kakao.maps.Map(container, options);
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 12, // 지도의 확대 레벨
      };

    let map = new kakao.maps.Map(mapContainer, mapOption),
      customOverlay = new kakao.maps.CustomOverlay({});

    let detailMode = false; // level에 따라 다른 json 파일 사용
    let level = "";
    let polygons = [];
    let areas = [];

    init("/data/sid.json"); // 초기 시작

    kakao.maps.event.addListener(map, "zoom_changed", function () {
      level = map.getLevel();
      if (!detailMode && level <= 10) {
        // level 에 따라 다른 json 파일을 사용한다.
        detailMode = true;
        removePolygon();
        init("/data/sig.json");
      } else if (detailMode && level > 10) {
        // level 에 따라 다른 json 파일을 사용한다.
        detailMode = false;
        removePolygon();
        init("/data/sid.json");
      }
    });

    // 모든 폴리곤을 지우는 함수
    function removePolygon() {
      for (let i = 0; i < polygons.length; i++) {
        polygons[i].setMap(null);
      }
      areas = [];
      polygons = [];
    }

    // 폴리곤 생성
    function init(path) {
      //path 경로의 json 파일 파싱
      // $.getJSON(path, function (geojson) {
      //   var units = geojson.features; // json key값이 "features"인 것의 value를 통으로 가져온다.
      //   $.each(units, function (index, unit) {
      //     // 1개 지역씩 꺼내서 사용. val은 그 1개 지역에 대한 정보를 담는다
      //     var coordinates = []; //좌표 저장할 배열
      //     var name = ""; // 지역 이름
      //     var cd_location = "";
      //     coordinates = unit.geometry.coordinates; // 1개 지역의 영역을 구성하는 다각형의 모든 좌표 배열
      //     name = unit.properties.SIG_KOR_NM; // 1개 지역의 이름
      //     cd_location = unit.properties.SIG_CD;

      //     var ob = new Object();
      //     ob.name = name;
      //     ob.path = [];
      //     ob.location = cd_location;
      //     $.each(coordinates[0], function (index, coordinate) {
      //       ob.path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
      //     });

      //     areas[index] = ob;
      //     console.log(coordinates); // 좌표 배열 확인
      //   }); //each
      // }); //getJSON

      // // 지도에 영역데이터를 폴리곤으로 표시
      // for (var i = 0, len = areas.length; i < len; i++) {
      //   displayArea(areas[i]);
      // }
      $.getJSON(path, function (geojson) {
        const units = geojson.features; // JSON의 "features" 키값을 가져옵니다.
        areas = []; // areas 배열 초기화

        units.forEach((unit) => {
          const coordinates = unit.geometry.coordinates;
          const name = unit.properties.SIG_KOR_NM;
          const cd_location = unit.properties.SIG_CD;

          const ob = {
            name: name,
            path: coordinates[0].map(
              (coord) => new kakao.maps.LatLng(coord[1], coord[0])
            ),
            location: cd_location,
          };

          areas.push(ob);
        });

        // 폴리곤 표시
        areas.forEach((area) => displayArea(area));
      }).fail(function () {
        console.error("JSON 로딩 실패");
      });

      function displayArea(area) {
        var polygon = new kakao.maps.Polygon({
          map: map,
          path: area.path,
          strokeWeight: 2,
          strokeColor: "#004c80",
          strokeOpacity: 0.8,
          fillColor: "#fff",
          fillOpacity: 0.7,
        });
        polygons.push(polygon);

        kakao.maps.event.addListener(
          polygon,
          "mouseover",
          function (mouseEvent) {
            polygon.setOptions({ fillColor: "#09f" });
            customOverlay.setContent(
              '<div class="area">' + area.name + "</div>"
            );
            customOverlay.setPosition(mouseEvent.latLng);
            customOverlay.setMap(map);
          }
        );

        kakao.maps.event.addListener(
          polygon,
          "mousemove",
          function (mouseEvent) {
            customOverlay.setPosition(mouseEvent.latLng);
          }
        );

        kakao.maps.event.addListener(polygon, "mouseout", function () {
          polygon.setOptions({ fillColor: "#fff" });
          customOverlay.setMap(null);
        });

        kakao.maps.event.addListener(polygon, "click", function (mouseEvent) {
          if (!detailMode) {
            map.setLevel(10); // level에 따라 이벤트 변경
            var latlng = mouseEvent.latLng;

            // 지도의 중심을 부드럽게 클릭한 위치로 이동시킵니다.
            map.panTo(latlng);
          } else {
            // 클릭 이벤트 함수
            // callFunctionWithRegionCode(area.location);
          }
        });
      }
    }
  }, []);
  return (
    <s.Frame>
      <div id="map" style={{ width: "500px", height: "500px" }}></div>
    </s.Frame>
  );
};

export default Map;
