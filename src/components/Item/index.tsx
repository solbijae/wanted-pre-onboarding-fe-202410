import * as S from './styles'
import { MockData } from "../../data/MockData";

const Item = (data: MockData) => {
  return (
    <S.ItemWrapper>
      <S.ItemName>{data.productName}</S.ItemName>
      <S.ItemPrice>Price : {data.price}</S.ItemPrice>
      <S.ItemDate>{data.boughtDate.split('GMT')[0].trim()}</S.ItemDate>
    </S.ItemWrapper>
  )
}

export default Item;
