import React from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import img from '../../assets/img/sp_img.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CommentRead, ReplyRead } from '../../lib/apis/CommentReadApi';
import { CommentUpdate, ReplyUpdate } from '../../lib/apis/CommentWrite';
import { CommentDeleteApi } from '../../lib/apis/CommentDeleteApi';
import { ReplyDeleteApi } from '../../lib/apis/ReplyDeleteApi';

const S = {
  Content: styled.div`
    width: 370px;
    height: auto;
    margin: 0 auto;
    display: block;
  `,
  Box: styled.div`
    width: 370px;
    height: auto;
    border: 1px solid #dadada;
    border-radius: 10px;
  `,
  List: styled.ul`
    width: 370px;
    height: auto;
    list-style: none;
  `,
  Message: styled.div`
    width: 370px;
    height: auto;
  `,
  MessageBox: styled.div`
    width: 370px;
    height: auto;
    display: flex;
    cursor: pointer;
  `,
  Reply: styled.div`
    width: 330px;
    height: auto;
    margin-left: 20px;
    background-color: #fafafa;
  `,
  ReplyBox: styled.li`
    width: 330px;
    height: auto;
    display: flex;
    border: 1px solid #ddd;
    cursor: default;
  `,
  CommentLine: styled.div`
    width: 350px;
    border-top: 1px solid #dadada;
    margin: 0 auto;
  `,
  Cuser: styled.div`
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
    margin: auto auto;
  `,
  Ctext: styled.div`
    width: 250px;
    height: auto;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 12px;
  `,
  Replyuser: styled.div`
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
  `,
  Replytext: styled.div`
    width: 240px;
    height: auto;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 12px;
    &::before {
      content: ' ';
      position: relative;
      padding-right: 8px;
      left: -3px;
      top: -2px;
      display: block;
      width: 8px;
      height: 8px;
      background: url(${img}) no-repeat;
      background-position: -283px -200px;
    }
  `,
  closeButton: styled.button`
    display: block;
    width: 13px;
    height: 13px;
    background: url(${img}) no-repeat;
    background-position: -268px -200px;
    margin: auto auto;
    cursor: pointer;
  `,
  InputBox: styled.div`
    width: 370px;
    height: 45px;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
    &.add {
      display: block;
    }
  `,
  ReplyInputBox: styled.div`
    width: 330px;
    height: 45px;
    margin: 0 auto;
    background-color: #fafafa;
    display: flex;
    position: relative;
    justify-content: space-between;
    border: 1px solid #ddd;
    align-items: center;
    &.add {
      display: block;
    }
  `,
  CommentInput: styled.input`
    width: 280px;
    height: 30px;
    border: solid 1px #dadada;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
  `,
  ReplyInput: styled.input`
    width: 260px;
    height: 30px;
    border: solid 1px #dadada;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
  `,
  CommentButton: styled.button`
    width: 70px;
    height: 30px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    background-color: #e2e2e2;
    cursor: pointer;
    ${(props) =>
      props.active === false &&
      css`
        background-color: #f7f7f7;
        color: #000;
        :hover {
        }
        pointer-events: none;
      `}
  `,
  ReplyButton: styled.button`
    width: 60px;
    height: 30px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    background-color: #e2e2e2;
    cursor: pointer;
    ${(props) =>
      props.active === false &&
      css`
        background-color: #f7f7f7;
        color: #000;
        :hover {
        }
        pointer-events: none;
      `}
  `,
};

const Comment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const index = location.state.itemIdx;
  const itemIdx = index;
  const [comment, setComment] = useState({
    idx: index,
    user: sessionStorage.getItem('username'),
    comment: '',
    email: sessionStorage.getItem('id'),
  });
  const [reply, setreply] = useState({
    idx: index,
    user: sessionStorage.getItem('username'),
    comment: '',
    comment_id: '',
    email: sessionStorage.getItem('id'),
  });
  const [commentData, setCommentData] = useState([]);
  const [replyData, setReplyData] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(null);

  useEffect(() => {
    // 이펙트 함수를 통해 데이터를 가져옵니다.
    GetCommentRead(index);
    GetReplyRead(index);
  }, []);

  const GetCommentRead = async (idx) => {
    try {
      const response = await CommentRead(idx);
      console.log(response);

      // 가져온 데이터를 배열에 추가
      setCommentData(response);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  const GetReplyRead = async (idx) => {
    try {
      const response = await ReplyRead(idx);
      console.log(response);

      setReplyData(response);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  const toggleVisibility = (index) => {
    if (index === visibleIndex) {
      // 이미 보이는 div를 클릭하면 숨김
      setVisibleIndex(null);
    } else {
      // 다른 div를 클릭하면 해당 div를 보임
      setVisibleIndex(index);
    }
  };

  const commentInputChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };
  const replyInputChange = (e) => {
    setreply({
      ...reply,
      [e.target.name]: e.target.value,
    });
  };
  const GetCommentUpdate = (comment) => async () => {
    console.log('댓글 등록', comment.comment, comment.user, comment.idx);
    if (!comment.comment) {
      alert('내용을 입력해주세요.');
      return;
    }
    try {
      const response = await CommentUpdate(comment);
      // 서버에서의 응답 처리
      if (response.success) {
        comment.comment = '';
        GetCommentRead(comment.idx);
      } else {
        alert('댓글 업로드에 실패하였습니다!');
      }
    } catch (error) {
      console.error('댓글 업로드 실패:', error);
    }
  };

  const GetReplyUpdate = (reply, commentId) => async () => {
    console.log('댓글 등록', reply.comment, reply.user, reply.idx);
    if (!reply.comment) {
      alert('내용을 입력해주세요.');
      return;
    }
    try {
      // 현재 보이는 댓글의 c_id 값을 comment_id로 설정
      reply.comment_id = commentId;

      const response = await ReplyUpdate(reply);
      // 서버에서의 응답 처리
      if (response.success) {
        reply.comment = '';
        GetReplyRead(reply.idx);
      } else {
        alert('댓글 업로드에 실패하였습니다!');
      }
    } catch (error) {
      console.error('댓글 업로드 실패:', error);
    }
  };

  const DeleteComment = (idx) => async () => {
    const confirmation = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmation) {
      try {
        console.log('코멘트 번호', idx);
        const response = await CommentDeleteApi(idx);
        if (response.success) {
          console.log(response.message);
          GetCommentRead(itemIdx);
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.error('삭제에 실패했습니다:', error);
      }
    }
  };

  const DeleteReply = (idx) => async () => {
    const confirmation = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmation) {
      try {
        console.log('리플 번호', idx);
        const response = await ReplyDeleteApi(idx);
        if (response.success) {
          console.log(response.message);
          GetReplyRead(itemIdx);
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.error('삭제에 실패했습니다:', error);
      }
    }
  };

  return (
    <S.Content>
      <S.Box>
        <S.List>
          {commentData.map((data, commentIndex) => (
            <S.Message key={data.c_id}>
              {console.log('댓글', { commentData })}
              <S.MessageBox>
                <div
                  style={{
                    display: 'flex',
                    width: '320px',
                    height: 'auto',
                    position: 'relative',
                  }}
                  onClick={() => toggleVisibility(data.c_id)}
                >
                  <S.Cuser>{data.name}</S.Cuser>
                  <S.Ctext>{data.content}</S.Ctext>
                </div>
                {data.email === sessionStorage.getItem('id') &&
                data.content !== '삭제된 댓글입니다' ? (
                  <S.closeButton onClick={DeleteComment(data.c_id)} />
                ) : null}
              </S.MessageBox>
              <S.CommentLine />
              {replyData
                .filter((reply) => reply.comment_id === data.c_id.toString())
                .map((reply, replyIndex) => (
                  <S.Reply key={replyIndex}>
                    {console.log('대댓글', { reply })}
                    <S.ReplyBox>
                      <S.Replyuser>{reply.name}</S.Replyuser>
                      <S.Replytext>{reply.text}</S.Replytext>
                      {reply.email === sessionStorage.getItem('id') &&
                      reply.text !== '삭제된 댓글입니다' ? (
                        <S.closeButton onClick={DeleteReply(reply.r_id)} />
                      ) : null}
                    </S.ReplyBox>
                  </S.Reply>
                ))}
              {data.c_id === visibleIndex &&
              data.content !== '삭제된 댓글입니다' ? (
                <S.ReplyInputBox>
                  <S.ReplyInput
                    name="comment"
                    value={reply.comment}
                    onChange={replyInputChange}
                    placeholder="댓글을 입력하세요."
                  />
                  <S.ReplyButton onClick={GetReplyUpdate(reply, data.c_id)}>
                    입 력
                  </S.ReplyButton>
                </S.ReplyInputBox>
              ) : null}
            </S.Message>
          ))}
        </S.List>
      </S.Box>
      <S.InputBox>
        <S.CommentInput
          name="comment"
          value={comment.comment}
          onChange={commentInputChange}
          placeholder="댓글을 입력하세요."
        />
        <S.CommentButton onClick={GetCommentUpdate(comment)}>
          입 력
        </S.CommentButton>
      </S.InputBox>
    </S.Content>
  );
};

export default Comment;
