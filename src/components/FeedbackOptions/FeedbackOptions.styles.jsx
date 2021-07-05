import styled from '@emotion/styled'
export const FeedbackButtons = styled.div`
  padding: 10px 40px;
  display: flex;
  align-items: center;
`
export const CustomButton = styled.button`
  margin-right: 40px;
  width: 120px;
  background-color: #e5ebf3;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  color: #0c1b42;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  :hover {
    border-radius: 4px;
    background-color: #61b0d4;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  }
`
