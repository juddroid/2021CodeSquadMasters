// 불변성 (Immutable) 값이나 변수를 적극 활용할 수 있다.
// 함수가 참조 투명성을 지키고, 부작용을 줄일 수 있도록 구현할 수 있다.
// 순수함수 (Pure Function) 로 구현할 수 있다.

class ClassifierAlpha {
  number = 0;

  constructor(number) {
    this.number = number;
  }

  // factors = (num) => {
  //   const isFactor = (number, potentialFactor) => number % potentialFactor == 0;
  //   return Array.from({ length: Math.sqrt(num) }, (_, i) => i + 1)
  //     .filter((pod) => isFactor(num, pod))
  //     .reduce((acc, cur) => {
  //       acc.add(cur);
  //       acc.add(num / cur);
  //       return acc;
  //     }, new Set());
  // };

  isFactor(potentialFactor) {
    return this.number % potentialFactor == 0;
  }

  factors() {
    var factorSet = new Set();
    // for문 안을 먼저 수정해보자
    for (var pod = 1; pod <= Math.sqrt(this.number); pod++) {
      if (this.isFactor(pod)) {
        factorSet.add(pod);
        factorSet.add(this.number / pod);
      }
    }
    return factorSet;
  }
  isPerfect() {
    return ClassifierAlpha.sum(this.factors()) - this.number == this.number;
  }

  isAbundant() {
    return ClassifierAlpha.sum(this.factors()) - this.number > this.number;
  }

  isDeficient() {
    return ClassifierAlpha.sum(this.factors()) - this.number < this.number;
  }

  static sum(factors) {
    var total = 0;
    factors.forEach((factor) => {
      total += factor;
    });
    return total;
  }
}

var alpha1 = new ClassifierAlpha(10);
var alpha2 = new ClassifierAlpha(6);

console.log(alpha1.isPerfect(10));
console.log(alpha2.isPerfect(6));
console.log(alpha1.factors(10));

module.exports = { ClassifierAlpha };
