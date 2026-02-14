import type { Question } from '../types'

export const TITLE = '지금 이 순간!'
export const SUBTITLE = '로또 번호 추천'
export const HERO_HINT = '당신의 지금 상황에 딱 맞는 번호를 추천해드려요!'
export const QUESTION_HEADER = '🍀 행운을 빚기 위한 상태 체크 중!'
export const RESULT_MESSAGE = '지금 당신의 상태에 딱 맞는 로또 조합을 찾았어요!'
export const DISCLAIMER = '본 서비스는 재미용이며 실제 당첨 확률과 무관합니다.'
export const LOADING_MESSAGES = [
  '당신의 오늘 데이터를 살펴보며 행운 지도를 펴는 중이에요.',
  '생활 패턴에서 반짝이는 숫자 조각을 채집하는 중입니다.',
  '지금 분위기에 맞는 럭키 파동을 조율하고 있어요.',
  '오늘의 리듬을 숫자 코드로 바꾸는 작업을 진행 중입니다.',
  '작은 습관들을 모아 가장 어울리는 번호 결을 찾고 있어요.',
  '당신의 선택을 바탕으로 행운 엔진이 회전 중입니다.',
  '오늘의 기운을 압축해 세트별 후보를 정리하고 있어요.',
  '지금 이 순간에 맞춘 숫자 조합을 세심하게 다듬는 중입니다.',
  '일상 데이터와 감각 데이터를 섞어 행운 비율을 계산 중이에요.',
  '마지막 점검 중! 당신에게 맞는 번호 세트를 마무리합니다.',
]

export const QUESTIONS: Question[] = [
  {
    id: 'Q1',
    category: 'concrete',
    text: '오늘 몇 시쯤 하루를 시작하셨나요?',
    options: [
      { id: 0, label: '6~8시' },
      { id: 1, label: '9~11시' },
      { id: 2, label: '12시 이후' },
      { id: 3, label: '밤을 넘겼다' },
    ],
  },
  {
    id: 'Q2',
    category: 'concrete',
    text: '지금 휴대폰 배터리는 어느 정도인가요?',
    options: [
      { id: 0, label: '80% 이상' },
      { id: 1, label: '40~79%' },
      { id: 2, label: '10~39%' },
      { id: 3, label: '10% 미만' },
    ],
  },
  {
    id: 'Q3',
    category: 'concrete',
    text: '오늘 외출하셨나요?',
    options: [
      { id: 0, label: '네' },
      { id: 1, label: '아니요' },
    ],
  },
  {
    id: 'Q4',
    category: 'concrete',
    text: '오늘 카페인을 드셨나요?',
    options: [
      { id: 0, label: '마셨다' },
      { id: 1, label: '안 마셨다' },
    ],
  },
  {
    id: 'Q5',
    category: 'concrete',
    text: '오늘 지출이 있었나요?',
    options: [
      { id: 0, label: '있었다' },
      { id: 1, label: '조금 있었다' },
      { id: 2, label: '거의 없었다' },
    ],
  },
  {
    id: 'Q6',
    category: 'concrete',
    text: '오늘 가장 많은 시간을 보낸 활동은?',
    options: [
      { id: 0, label: '휴대폰' },
      { id: 1, label: '대화' },
      { id: 2, label: '일/공부' },
      { id: 3, label: '휴식' },
    ],
  },
  {
    id: 'Q7',
    category: 'concrete',
    text: '최근 대화한 상대는 누구인가요?',
    options: [
      { id: 0, label: '👨‍👩‍👧 가족' },
      { id: 1, label: '🧑‍🤝‍🧑 친구' },
      { id: 2, label: '💼 학교/직장 동료' },
      { id: 3, label: '🥲 기억이 안남 ㅠ_ㅠ' },
    ],
  },
  {
    id: 'Q8',
    category: 'concrete',
    text: '지금 계신 공간은 어디인가요?',
    options: [
      { id: 0, label: '집' },
      { id: 1, label: '회사/학교' },
      { id: 2, label: '카페' },
      { id: 3, label: '야외' },
    ],
  },
  {
    id: 'Q9',
    category: 'concrete',
    text: '오늘 날씨는 어땠나요?',
    options: [
      { id: 0, label: '맑음' },
      { id: 1, label: '흐림' },
      { id: 2, label: '비' },
      { id: 3, label: '잘 모르겠다' },
    ],
  },
  {
    id: 'Q10',
    category: 'concrete',
    text: '오늘 가장 자주 본 색은?',
    options: [
      { id: 0, label: '빨강' },
      { id: 1, label: '파랑' },
      { id: 2, label: '초록' },
      { id: 3, label: '검정/회색' },
    ],
  },
  {
    id: 'Q11',
    category: 'concrete',
    text: '오늘 SNS 사용 시간은?',
    options: [
      { id: 0, label: '1시간 이하' },
      { id: 1, label: '1~3시간' },
      { id: 2, label: '3시간 이상' },
    ],
  },
  {
    id: 'Q12',
    category: 'concrete',
    text: '오늘 이동 수단은?',
    options: [
      { id: 0, label: '자동차' },
      { id: 1, label: '도보' },
      { id: 2, label: '대중교통' },
      { id: 3, label: '이동 없음' },
    ],
  },
  {
    id: 'Q13',
    category: 'concrete',
    text: '최근 가장 많이 떠오른 주제는?',
    options: [
      { id: 0, label: '돈' },
      { id: 1, label: '사람' },
      { id: 2, label: '목표' },
      { id: 3, label: '운' },
    ],
  },
  {
    id: 'Q14',
    category: 'concrete',
    text: '오늘 마지막 식사는?',
    options: [
      { id: 0, label: '한식' },
      { id: 1, label: '패스트푸드' },
      { id: 2, label: '면' },
      { id: 3, label: '간식' },
    ],
  },
  {
    id: 'Q15',
    category: 'concrete',
    text: '지금 앉아 계신가요?',
    options: [
      { id: 0, label: '앉아 있다' },
      { id: 1, label: '서 있다' },
      { id: 2, label: '누워 있다' },
    ],
  },
  {
    id: 'S1',
    category: 'symbolic',
    text: '오늘의 흐름은?',
    options: [
      { id: 0, label: '상승' },
      { id: 1, label: '유지' },
      { id: 2, label: '정체' },
      { id: 3, label: '반전' },
    ],
  },
  {
    id: 'S2',
    category: 'symbolic',
    text: '지금의 위치는?',
    options: [
      { id: 0, label: '시작점' },
      { id: 1, label: '중간 지점' },
      { id: 2, label: '거의 끝' },
      { id: 3, label: '전환점' },
    ],
  },
  {
    id: 'S3',
    category: 'symbolic',
    text: '오늘 숫자의 느낌은?',
    options: [
      { id: 0, label: '홀수' },
      { id: 1, label: '짝수' },
      { id: 2, label: '반복' },
      { id: 3, label: '균형' },
    ],
  },
  {
    id: 'S4',
    category: 'symbolic',
    text: '오늘의 기운은?',
    options: [
      { id: 0, label: '위로' },
      { id: 1, label: '아래로' },
      { id: 2, label: '앞으로' },
      { id: 3, label: '방향 전환' },
    ],
  },
  {
    id: 'S5',
    category: 'symbolic',
    text: '지금 당신은?',
    options: [
      { id: 0, label: '밀어붙이는 중' },
      { id: 1, label: '애매한 중' },
      { id: 2, label: '정리하는 중' },
      { id: 3, label: '맡기는 중' },
    ],
  },
]
