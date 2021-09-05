import heapq

scoville = [1, 2, 3, 9, 10, 12]
K = 7

def solution(scoville, K):

    heap = []
    count = 0

    for num in scoville:
      heapq.heappush(heap, num)
    
    while heap[0] < K:
      try:
        heapq.heappush(heap, heapq.heappop(heap) + (heapq.heappop(heap) * 2))
      except IndexError:
        return -1
      count += 1

    return count
    


result = solution(scoville, K)
print(result)