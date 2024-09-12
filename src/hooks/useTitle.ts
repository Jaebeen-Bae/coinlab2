import { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { exchangeRateState } from 'recoil/atoms/exchangeAtoms';
import { selectedCoinInfoState } from 'recoil/atoms/tableAtoms';
import { kimchiPremiumRatio } from 'utils';

export const useTitle = () => {
  const selectedCoinInfo = useRecoilValue(selectedCoinInfoState);
  const exchangeRate = useRecoilValue(exchangeRateState);

  const changeTitle = () => {
    if (selectedCoinInfo) {
      const { tradePrice, symbol, coinName, binancePrice } = selectedCoinInfo;
      const title = `${tradePrice.toLocaleString(
        'ko-KR',
      )} ${symbol}/KRW | ${coinName}(${symbol}) 국가권력급 투자자의 모임, 코인랩`;
      if (binancePrice) {
        const kimpRatio = kimchiPremiumRatio(
          tradePrice,
          binancePrice,
          exchangeRate,
        );
        const isPlus = kimpRatio > 0 && '+';
        const kimpRatioTitle = `${isPlus}${kimpRatio.toFixed(2)}% ${title}`;
        return kimpRatioTitle;
      } else {
        return title;
      }
    } else {
      return '코인랩';
    }
  };

  const newVlaue = useMemo(() => {
    return changeTitle();
  }, [selectedCoinInfo?.tradePrice]);

  useEffect(() => {
    if (selectedCoinInfo) {
      const htmlTitle = document.querySelector('title');
      (htmlTitle as HTMLTitleElement).innerText = newVlaue;
    }
  }, [newVlaue]);
};
