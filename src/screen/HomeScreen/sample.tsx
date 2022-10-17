import React from "react";
import styled from "styled-components";

interface HeaderProps {
  readonly variant: string;
}
const Heading = styled.h3`
font-weght:400;
font-size:1.8rem;
span{
  font-weight:700;
}
`;

const AddButton = styled.button`
display:flex;
gap:0.5rem;
align-item:center;
background:transparent;
outline:0;
border:0;
font-size:1.1rem;
span{
  font-size:1.75rem;
  font-weight:700;

  transition:all 0.25s ease;
  &:hover{
    opacity:0.75;
    scale:1.1;
  }
}
`;
const StyledRighrPane = styled.div`
padding: 2rem;
background: #fafafa;
`;

// const Header = styled.div`
// display:flex;
// align-items:center;
// justify-content:space-between;
// position:relative:


// &::after{
//   position:absolute;
//   content:"";
//   bottom:-1.25rem;
//   width:100%;
//   height:2px;
//   background:rgba(0,0,0,0.25);
// }

// `;
const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: ${(props) => (props.variant === "main" ? "2rem" : "1rem")}

  &::after {
    position: absolute;
    content: "";
    bottom: -1.25rem;
    width: 100%;
    height: 2px;
    background: rgba(0, 0, 0, 0.25);
    display: ${(props) => (props.variant === "main" ? "block" : "none")}
  }
`;

const folder = styled.div`

{
  background: red;
}

`;
const CardContainer = styled.div`
    {display: grid;
    grid-temp-columns: 1fr 1fr;
    column-gap: 2rem;}
`;
const RightPane = () => {
  return (<StyledRighrPane>
    <Header variant="main">
      <Heading>
        My  <span >PlayGroung</span>
      </Heading>
      {/* <button className="AddButton">+ New Folder</button> */}
      <AddButton>
        <span>+</span> New Folder
      </AddButton>
    </Header>

    <div className="Folder">
      <div className="Header">
        <h4 className="Heading">Data Structure</h4>
        <button className="AddButton">
          <span>+</span> New PlayGround
        </button>
      </div>

      <CardContainer>
        <div className="PlaygroundCard">card</div>
        <div className="PlaygroundCard">card</div>
        <div className="PlaygroundCard">card</div>
      </CardContainer>
    </div>
  </StyledRighrPane>
  )
};



// export default RightPane;