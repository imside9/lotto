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
    text: '오늘 하루, 몇 시에 부팅 완료됐나요?',
    options: [
      { id: 0, label: '6~8시 (새벽 인간 모드)' },
      { id: 1, label: '9~11시 (평범 인간 모드)' },
      { id: 2, label: '12시 이후 (슬로우 스타터 모드)' },
      { id: 3, label: '밤을 넘겼다 (야행성 전설 모드)' },
    ],
  },
  {
    id: 'Q2',
    category: 'concrete',
    text: '지금 휴대폰 배터리, 멘탈처럼 몇 퍼센트인가요?',
    options: [
      { id: 0, label: '80% 이상 (아직 세상 친절함)' },
      { id: 1, label: '40~79% (무난하게 버틸 만함)' },
      { id: 2, label: '10~39% (충전기 찾는 눈빛)' },
      { id: 3, label: '10% 미만 (삐- 경고음 인생)' },
    ],
  },
  {
    id: 'Q3',
    category: 'concrete',
    text: '오늘 집 밖 공기, 실제로 마셨나요?',
    options: [
      { id: 0, label: '네 (외부 퀘스트 완료)' },
      { id: 1, label: '아니요 (실내 던전 진행 중)' },
    ],
  },
  {
    id: 'Q4',
    category: 'concrete',
    text: '오늘 카페인 버프 받았나요?',
    options: [
      { id: 0, label: '마셨다 (각성 완료)' },
      { id: 1, label: '안 마셨다 (기본 스탯으로 승부)' },
    ],
  },
  {
    id: 'Q5',
    category: 'concrete',
    text: '오늘 지갑, 얼마나 울었나요?',
    options: [
      { id: 0, label: '있었다 (지갑이 오열함)' },
      { id: 1, label: '조금 있었다 (지갑이 훌쩍임)' },
      { id: 2, label: '거의 없었다 (지갑이 미소 지음)' },
    ],
  },
  {
    id: 'Q6',
    category: 'concrete',
    text: '오늘 시간을 가장 많이 먹은 보스는?',
    options: [
      { id: 0, label: '휴대폰 (스크롤 무한지옥)' },
      { id: 1, label: '대화 (수다 연료 풀충전)' },
      { id: 2, label: '일/공부 (현생 하드모드)' },
      { id: 3, label: '휴식 (누워서 우주여행)' },
    ],
  },
  {
    id: 'Q7',
    category: 'concrete',
    text: '최근 대화한 상대는 누구인가요?',
    options: [
      { id: 0, label: '👨‍👩‍👧 가족 (집단 토크)' },
      { id: 1, label: '🧑‍🤝‍🧑 친구 (드립 교환)' },
      { id: 2, label: '💼 학교/직장 동료 (현실 파티)' },
      { id: 3, label: '🥲 기억이 안남 ㅠ_ㅠ (로그 유실)' },
    ],
  },
  {
    id: 'Q8',
    category: 'concrete',
    text: '지금 계신 공간, 어디 스테이지인가요?',
    options: [
      { id: 0, label: '집 (안전지대)' },
      { id: 1, label: '회사/학교 (미션 구역)' },
      { id: 2, label: '카페 (분위기 버프존)' },
      { id: 3, label: '야외 (바람 물리엔진 활성화)' },
    ],
  },
  {
    id: 'Q9',
    category: 'concrete',
    text: '오늘 날씨 체감, 한 줄 평은?',
    options: [
      { id: 0, label: '맑음 (하늘이 열일함)' },
      { id: 1, label: '흐림 (회색 필터 ON)' },
      { id: 2, label: '비 (촉촉 모드)' },
      { id: 3, label: '잘 모르겠다 (커튼이 승리)' },
    ],
  },
  {
    id: 'Q10',
    category: 'concrete',
    text: '오늘 눈에 제일 많이 들어온 색은?',
    options: [
      { id: 0, label: '빨강 (열정 과다)' },
      { id: 1, label: '파랑 (차분 코스프레)' },
      { id: 2, label: '초록 (힐링 신호)' },
      { id: 3, label: '검정/회색 (모노톤 방어)' },
    ],
  },
  {
    id: 'Q11',
    category: 'concrete',
    text: '오늘 SNS 사용 시간은?',
    options: [
      { id: 0, label: '1시간 이하 (자제력 인간문화재)' },
      { id: 1, label: '1~3시간 (평균적 스크롤러)' },
      { id: 2, label: '3시간 이상 (엄지손가락 근육왕)' },
    ],
  },
  {
    id: 'Q12',
    category: 'concrete',
    text: '오늘 이동 수단은?',
    options: [
      { id: 0, label: '자동차 (바퀴의 힘)' },
      { id: 1, label: '도보 (두 다리의 자존심)' },
      { id: 2, label: '대중교통 (시간표와의 협상)' },
      { id: 3, label: '이동 없음 (정지 상태 S급)' },
    ],
  },
  {
    id: 'Q13',
    category: 'concrete',
    text: '최근 머릿속 점유율 1위 주제는?',
    options: [
      { id: 0, label: '돈 (현실 치트키)' },
      { id: 1, label: '사람 (관계 시뮬레이션)' },
      { id: 2, label: '목표 (미래 빌드업)' },
      { id: 3, label: '운 (하늘에 맡김)' },
    ],
  },
  {
    id: 'Q14',
    category: 'concrete',
    text: '오늘 마지막 식사는?',
    options: [
      { id: 0, label: '한식 (든든 국룰)' },
      { id: 1, label: '패스트푸드 (속도전)' },
      { id: 2, label: '면 (후루룩 철학)' },
      { id: 3, label: '간식 (조각조각 행복)' },
    ],
  },
  {
    id: 'Q15',
    category: 'concrete',
    text: '지금 자세는?',
    options: [
      { id: 0, label: '앉아 있다 (기본 자세)' },
      { id: 1, label: '서 있다 (기동 자세)' },
      { id: 2, label: '누워 있다 (중력 순응형)' },
    ],
  },
  {
    id: 'S1',
    category: 'symbolic',
    text: '오늘 인생 그래프는 어떤 느낌?',
    options: [
      { id: 0, label: '상승 (주가 우상향)' },
      { id: 1, label: '유지 (수평 유지)' },
      { id: 2, label: '정체 (로딩 중)' },
      { id: 3, label: '반전 (갑분 떡상)' },
    ],
  },
  {
    id: 'S2',
    category: 'symbolic',
    text: '지금 스토리 진행도는?',
    options: [
      { id: 0, label: '시작점 (프롤로그)' },
      { id: 1, label: '중간 지점 (본편 한복판)' },
      { id: 2, label: '거의 끝 (엔딩 직전)' },
      { id: 3, label: '전환점 (장르 변경 예고)' },
    ],
  },
  {
    id: 'S3',
    category: 'symbolic',
    text: '오늘 숫자 감성은 어느 쪽?',
    options: [
      { id: 0, label: '홀수 (삐딱한 매력)' },
      { id: 1, label: '짝수 (반듯한 안정감)' },
      { id: 2, label: '반복 (같은 패턴의 미학)' },
      { id: 3, label: '균형 (좌우 대칭의 평화)' },
    ],
  },
  {
    id: 'S4',
    category: 'symbolic',
    text: '오늘 기운의 화살표는?',
    options: [
      { id: 0, label: '위로 (텐션 상승)' },
      { id: 1, label: '아래로 (진정 모드)' },
      { id: 2, label: '앞으로 (직진 본능)' },
      { id: 3, label: '방향 전환 (핸들 꺾기)' },
    ],
  },
  {
    id: 'S5',
    category: 'symbolic',
    text: '지금 당신의 운영 전략은?',
    options: [
      { id: 0, label: '밀어붙이는 중 (돌격)' },
      { id: 1, label: '애매한 중 (관망)' },
      { id: 2, label: '정리하는 중 (인벤토리 정리)' },
      { id: 3, label: '맡기는 중 (운명에게 아웃소싱)' },
    ],
  },
]
