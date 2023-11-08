import React from 'react';
import styled from 'styled-components';
import { CarmapListApi } from '../../lib/apis/CarmapListApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/img/404.png';
import { useRef } from 'react';
import { RepairShop } from '../CarDamage/RepairShop';

const { kakao } = window;

const S = {
  Box: styled.div`
    width: 350px;
    height: 350px;
    border: 2px solid #2e2e2e;
    margin: 0 auto;
  `,
  Table: styled.table`
    width: 385px;
    margin: 0 auto;
    border-bottom: 1px solid #5c5c5c;
    border-top: 2px solid #2e2e2e;
    font-size: 12px;
    margin-bottom: 10px;
  `,
  Head: styled.thead`
    /* border: 1px solid blue; */
    text-align: center;
    background-color: #05194d;
    color: #fff;
  `,
  Tr: styled.tr`
    border: 1px solid blue;
    height: 30px;
    cursor: pointer;
    &.list {
      font-size: 10px;
    }
  `,
  Th: styled.th`
    width: 70px;
    background-color: white;
    color: #143c56;
    font-weight: 700;
    vertical-align: middle !important;
  `,
  Td: styled.td`
    border: 1px solid #e4dcd3;
    vertical-align: middle !important;
    &.name {
      width: 80px;
      text-align: center;
      white-space: pre-line;
      line-height: 15px;
    }
    &.Read {
      width: 170px;
    }
    &.number {
      text-align: center;
      width: 70px;
    }
  `,
  body: styled.tbody``,
  TableBox: styled.div`
    position: relative;
    margin-top: 20px;
    width: auto;
    height: 360px;
  `,
  Pagination: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `,
  PageButton: styled.button`
    margin: 0 5px;
    cursor: pointer;
    &.active {
      color: red;
    }
  `,
  error: styled.img`
    width: 300px;
    height: 300px;
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
  `,
};

const MapBox = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get('page')) || 1;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const pageSize = 10;
  const totalItems = data.length;

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false); // Map 로딩 상태 추가

  // 기존 지도 객체를 state로 관리
  const [map, setMap] = useState(null);
  // 기존 마커 객체를 state로 관리
  const [markers, setMarkers] = useState([]);

  const handlePageChange = (newPage) => {
    navigate(`/map?page=${newPage}`);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getList();
  }, [currentPage]);

  const getList = async () => {
    try {
      const response = await CarmapListApi();
      setData(response);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const mapRef = useRef(null);

  // 브라우저가 geolocation을 지원하고 로딩 상태가 아직이라면 위치를 가져오기
  useEffect(() => {
    if ('geolocation' in navigator && !mapLoaded) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setMapLoaded(true); // Map 로딩 완료 설정
        },
        function (error) {
          setError(error.message);
          setMapLoaded(true); // Map 로딩 완료 설정
        },
      );
    } else {
      setError('Geolocation is not available in your browser.');
      setMapLoaded(true); // Map 로딩 완료 설정
    }
  }, [mapLoaded]);

  useEffect(() => {
    const container = mapRef.current;

    if (mapLoaded) {
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      const newMap = new kakao.maps.Map(container, options);
      setMap(newMap);

      // 이전 마커들을 모두 지도에서 제거
      markers.forEach((marker) => marker.setMap(null));

      const newMarkers = RepairShop.map((el) => {
        const markerImage = new window.kakao.maps.MarkerImage(
          el.img, // 이미지 URL
          new window.kakao.maps.Size(50, 50), // 이미지 크기
          { offset: new window.kakao.maps.Point(15, 30) }, // 이미지 위치
        );
        return new window.kakao.maps.Marker({
          map: newMap, // 새로운 지도 객체에 마커를 추가
          position: new window.kakao.maps.LatLng(el.lat, el.lng),
          title: el.title,
          image: markerImage,
        });
      });

      // 새로 생성한 마커들로 업데이트
      setMarkers(newMarkers);
    }
  }, [latitude, longitude, mapLoaded]);

  const ChangeMap = (CenterName) => {
    // 이 부분에서 CenterName을 직접 추출
    const title = CenterName; // CenterName은 이벤트 객체가 아니라 클릭된 row의 title일 것으로 가정

    const selectedShop = RepairShop.find((shop) => shop.title === title);
    console.log(selectedShop.lat, selectedShop.lng);
    if (selectedShop && selectedShop.lat && selectedShop.lng) {
      // 선택된 상점이 있고, lat 및 lng 값이 있을 때만 지도의 중심을 이동
      map.panTo(
        new window.kakao.maps.LatLng(selectedShop.lat, selectedShop.lng),
      );
    }
  };

  return (
    <>
      {console.log(latitude, longitude)}
      <S.Box id="map" ref={mapRef}></S.Box>
      <S.TableBox>
        <S.Table>
          <S.Head>
            <S.Tr>
              <S.Td>업체명</S.Td>
              <S.Td>주소</S.Td>
              <S.Td>전화번호</S.Td>
            </S.Tr>
          </S.Head>
          <S.body>
            {currentItems.length === 0 ? (
              <S.error src={img} />
            ) : (
              currentItems.map((item, index) => {
                const name = item.name; // item.name을 const 변수 name에 할당
                const repairName = name.replace(/ /, '\n'); // 모든 공백을 \n으로 대체

                return (
                  <S.Tr
                    className="list"
                    key={index}
                    onClick={() => ChangeMap(item.name)}
                  >
                    <S.Td className="name">{repairName}</S.Td>
                    <S.Td className="Read">{item.address}</S.Td>
                    <S.Td className="number">{item.tell}</S.Td>
                  </S.Tr>
                );
              })
            )}
          </S.body>
        </S.Table>
      </S.TableBox>
      <S.Pagination>
        {Array.from(
          { length: Math.ceil(totalItems / pageSize) },
          (_, index) => (
            <S.PageButton
              className={currentPage === index + 1 ? 'active' : ''}
              key={index}
              // onClick={() => paginate(index + 1)}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </S.PageButton>
          ),
        )}
      </S.Pagination>
    </>
  );
};

export default MapBox;
