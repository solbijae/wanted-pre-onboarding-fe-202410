import * as S from './styles';

type ItemSkeletonProps = {
  count: number;
};

const ItemSkeleton = ({ count }: ItemSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <S.ItemWrapper key={index}>
          <S.ItemName></S.ItemName>
          <S.ItemPrice></S.ItemPrice>
          <S.ItemDate></S.ItemDate>
        </S.ItemWrapper>
      ))}
    </>
  );
}

export default ItemSkeleton;
