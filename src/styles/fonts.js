import styled from 'styled-components';

const BasicParagraph = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
`;

export const Paragraph = styled(BasicParagraph)`
    font-size: 14px;
    font-weight: 300;
`;

export const Title = styled(BasicParagraph)`
    font-size: 50px;
    font-weight: 500;
    margin: 20px;
    margin-top: 40px;
    margin-bottom: 50px;
    text-align: center;
    color: #fff;

    @media (max-width: 1300px) and (min-width: 701px) {
        margin: 20px;
    }

    @media (max-width: 700px) {
        & {
            font-size: 30px;
            margin-bottom: 26px;
        }
    }
`;

export const SubTitle = styled(BasicParagraph)`
    font-size: 16px;
    font-weight: 400;
`;

export const MinorText = styled(BasicParagraph)`
    font-size: 12px;
    font-weight: 300;
`;