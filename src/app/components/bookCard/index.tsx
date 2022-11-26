import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div`
  ${tw`
      flex
      justify-center
      items-center
      rounded-md
      bg-white
      pt-1
      pb-1   
      pr-2
      pl-2
      md:pt-2  
      md:pb-2  
      md:pl-6  
      md:pr-6
  `};
`;

const ItemContainer = styled.div`
  ${tw`
      flex
  `};
`;

const Icon = styled.span`
  ${tw`
      text-red-500
  `};
`;

const BookCard: React.FC = () => {
  return <CardContainer></CardContainer>;
};

export default BookCard;