import styled from "styled-components";

export const ImageStyle = styled.img`
    width: 30%;
`;

export const SpanStyle = styled.span`
    font-size: 16px;
`;

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 75px;
    margin-bottom: 15px;
    ${ImageStyle};
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    ${SpanStyle};
`;