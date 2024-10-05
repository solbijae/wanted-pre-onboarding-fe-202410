import * as S from './styles'
import { useState, useCallback } from 'react';
import { getMockData, MockData, GetMockDataResult } from '../data/MockData';
import Item from '../components/Item';
import ItemSkeleton from '../components/ItemSkeleton';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

function App() {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [datas, setDatas] = useState<MockData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totlaPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    const calPriceSum = (data: MockData[]) => data.reduce((acc, curr) => acc + curr.price, 0)
    if (loading || isEnd) return;

    setLoading(true);

    try {
      const result: GetMockDataResult = await getMockData(page);
      const newData = result.datas;
      const newPriceSum = calPriceSum(newData);
      setDatas((prevDatas) => [...prevDatas, ...newData]);
      setTotalPrice(prev => prev + newPriceSum)
      setPage((prevPage) => prevPage + 1);
      setIsEnd(result.isEnd);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [loading, isEnd, page]);

  useInfiniteScroll({
    target,
    isEnd,
    onLoadMore: fetchData,
    loading
  });

  return (
    <>
      <S.Header>Frontend Pre-Onboarding</S.Header>
      <S.ItemContainer>
        <S.ItemContainer>💰 Total Price: {totlaPrice}</S.ItemContainer>
        {datas && datas.map((item) => <Item key={item.productId} {...item} />)} 
        <div ref={setTarget} />
        {loading && <ItemSkeleton count={3} />}
        {isEnd && <S.Message>더 불러올 데이터가 없습니다.</S.Message>}
      </S.ItemContainer>
    </>
  );
}

export default App;