import styled from 'styled-components';

export const Title = styled.h1`
    text-transform: uppercase;
    margin-bottom: 20px;
    font-size: 36px;
    color: rgb(66, 135, 245);
`;

export const Text = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
`;

export const StartLink = styled.a`
    border: 0 solid transparent;
    border-radius: 4px;
    color: #fff;
    background-color: rgb(66, 135, 245);
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 16px;

    :hover, :focus {
        background-color: rgb(4, 196, 248);
        box-shadow: rgb(42, 153, 159) 0px 0px 5px 2px;
    }
`;