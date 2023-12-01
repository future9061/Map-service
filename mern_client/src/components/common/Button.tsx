import React, { Children } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//chidren 버튼 내용 props로 받기
//onClick 클릭햇을 때 이벤트 or Link 버튼 클릭하면 페이지 이동
//type : 'link' | 'button'
//url

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "link" | "button";
  url?: string;
}

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  padding: 0;
  cursor: pointer;
`;

function Button({ children, onClick, type = "button", url }: ButtonProps) {
  const RealButton = <StyledButton onClick={onClick}>{children}</StyledButton>;

  const RealLink = (
    <StyledButton>
      <Link to={url!}>{children}</Link>
    </StyledButton>
  );

  return type === "link" && url ? RealLink : RealButton;
}

export default React.memo(Button);
