import { useEffect } from 'react';

interface InfiniteScrollOptions {
  target: HTMLElement | null;
  isEnd: boolean;
  onLoadMore: () => void;
  loading: boolean;
}

export const useInfiniteScroll = ({ target, isEnd, onLoadMore, loading }: InfiniteScrollOptions) => {
  useEffect(() => {
    if (!target || isEnd || loading) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        onLoadMore();
      }
    });

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [target, isEnd, loading, onLoadMore]);
};
