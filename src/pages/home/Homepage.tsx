import * as styled from './Home.styles';
import { Header } from 'components/common/Header';
import { Widget } from 'components/Widget';
import { ChartLeft } from 'components/ChartLeft';
import { ChartRight } from 'components/ChartRight';
import { Table } from 'components/Table';
import { useFetchExchangeRate } from 'hooks/binance';
import { useTitle } from 'hooks/useTitle';

export const Home: React.FC = () => {
  useFetchExchangeRate();
  useTitle();

  return (
    <>
      <Header />
      <styled.DisplayBoard>
        <Widget />
        <styled.ChartsWrapper>
          <ChartLeft />
          <ChartRight />
        </styled.ChartsWrapper>
        <Table />
      </styled.DisplayBoard>
    </>
  );
};
