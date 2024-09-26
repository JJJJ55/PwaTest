import React from "react";
import styled from "styled-components";
import ImageMeta from "../TestComponents/ImageMeta";

const s = {
  Frame: styled.div`
    width: 100%;
  `,
};

const MoneyPage = () => {
  function onClickPayment() {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init("imp45341687"); //실제 내꺼

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: "nice", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: "킥보드 범칙금", // 주문명
      buyer_name: "홍길동", // 구매자 성명
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }
  return (
    <s.Frame>
      <button onClick={onClickPayment}>결제하기</button>
    </s.Frame>
  );
};

export default MoneyPage;
