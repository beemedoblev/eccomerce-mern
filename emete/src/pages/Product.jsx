
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import myImage from "../images/IMG_6888.jpg";
import {mobile } from '../responsive';
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  margin: 0;
  display: flex;
  ${mobile ({ padding: "10px", flexDirection:"column"})}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Image = styled.img`
  width: 75%;
  height: 90vh;
  object-fit: cover;
  ${mobile({padding:"10px"})}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterTalles = styled.select`
margin-left:10px;
padding : 5px;
`;

const FilterTallesOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items:center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
  background-color:#f8f4f4
}

`;


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={myImage} />
        </ImgContainer>
        <InfoContainer>
          <Title>Jogger Stone</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            architecto quis vero, reiciendis officiis facilis tenetur ipsam ut
            atque magnam soluta quod, quo earum maiores, dolore numquam aliquam
            maxime vel?
          </Desc>
          <Price> $20 </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Talles</FilterTitle>
              <FilterTalles>
                <FilterTallesOption>XS</FilterTallesOption>
                <FilterTallesOption>S</FilterTallesOption>
                <FilterTallesOption>M</FilterTallesOption>
                <FilterTallesOption>L</FilterTallesOption>
                <FilterTallesOption>XL</FilterTallesOption>
              </FilterTalles>
            </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                  <Remove/>
                  <Amount>1</Amount>
                  <Add/>
              </AmountContainer>
                  <Button>Agregar al Carrito</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
