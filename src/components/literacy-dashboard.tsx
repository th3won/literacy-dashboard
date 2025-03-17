"use client";

import React, { useState } from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Simulated data based on the report
  const literacySymptoms = [
    { name: '읽기 회피', value: 68 },
    { name: '단어 추측', value: 57 },
    { name: '흥미 빠른 상실', value: 73 },
    { name: '의미 이해 어려움', value: 62 }
  ];
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];
  
  const interactionData = [
    { name: '01:00', screenTime: 80, readingTime: 20 },
    { name: '03:00', screenTime: 75, readingTime: 25 },
    { name: '06:00', screenTime: 85, readingTime: 15 },
    { name: '09:00', screenTime: 90, readingTime: 10 },
    { name: '12:30', screenTime: 65, readingTime: 35 },
    { name: '15:00', screenTime: 60, readingTime: 40 },
    { name: '18:00', screenTime: 70, readingTime: 30 },
    { name: '21:00', screenTime: 85, readingTime: 15 }
  ];
  
  const literacyCampResults = [
    { category: '문해력 향상도', before: 45, after: 78 },
    { category: '학업 성취도', before: 52, after: 81 },
    { category: '학습 태도', before: 48, after: 85 },
    { category: '참여도', before: 40, after: 75 }
  ];
  
  const readingStrategies = [
    { subject: '추론 연습', value: 85, fullMark: 100 },
    { subject: '협력적 토론', value: 78, fullMark: 100 },
    { subject: '시각화 기법', value: 65, fullMark: 100 },
    { subject: '질문 생성', value: 72, fullMark: 100 },
    { subject: '요약 기술', value: 80, fullMark: 100 },
    { subject: '어휘 개발', value: 69, fullMark: 100 }
  ];
  
  const eyeTrackingData = [
    { name: '핵심 정보 확인', normal: 75, struggling: 35 },
    { name: '주요 세부사항 파악', normal: 65, struggling: 30 },
    { name: '텍스트 구조 인식', normal: 60, struggling: 25 },
    { name: '배경지식 활성화', normal: 70, struggling: 40 },
    { name: '추론 도출', normal: 55, struggling: 20 }
  ];
  
  const timestampData = [
    { timestamp: '00:56', event: '문해력 문제 소개', description: '학생들이 텍스트 이해에 어려움을 겪는 문제 소개' },
    { timestamp: '06:57', event: '문해력 부족 증상', description: '흔한 단어와 구절의 의미 이해 어려움' },
    { timestamp: '07:49', event: '문해력 부족 행동', description: '읽기 회피, 단어 추측, 흥미 상실 등의 행동 패턴' },
    { timestamp: '10:43', event: '안구 추적 분석', description: '독해력 낮은 학생들의 텍스트 주시 패턴 분석' },
    { timestamp: '12:31', event: '스크린 타임 영향', description: '과도한 스크린 타임이 읽기 습관에 미치는 영향' },
    { timestamp: '13:28', event: '추론 연습', description: '문해력 향상을 위한 추론 연습 활동 소개' },
    { timestamp: '16:44', event: '긍정적 결과', description: '문해력 캠프 후 학생들의 개선된 성과' },
    { timestamp: '18:22', event: '학교 지원의 중요성', description: '문해력 향상을 위한 학교의 역할과 중요성' }
  ];

  // Overview Tab Content
  const renderOverviewTab = () => (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 col-span-1">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">📌 핵심 요약</h2>
        <p className="text-gray-700 mb-4">
          이 영상은 중학생들의 문해력 및 독해력 어려움과 그 원인, 해결책을 탐구합니다. 학생들의 학업 성취도와 전반적인 학습 경험에 미치는 영향에 대해 강조하며, 문해력 캠프를 통한 개선 사례를 소개합니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-indigo-50 p-4 rounded-md">
            <h3 className="font-medium text-indigo-700">문해력 부족 증상</h3>
            <p className="text-sm text-gray-600 mt-2">학생들이 보이는 독특한 행동 패턴</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-md">
            <h3 className="font-medium text-indigo-700">안구 추적 분석</h3>
            <p className="text-sm text-gray-600 mt-2">독해력과 시선 움직임의 관계</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-md">
            <h3 className="font-medium text-indigo-700">문해력 캠프 효과</h3>
            <p className="text-sm text-gray-600 mt-2">집중 프로그램을 통한 개선 사례</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 col-span-1">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">🔑 주요 인사이트</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-indigo-600">문해력 부족의 증상 [07:49]</h3>
            <p className="text-sm text-gray-600 mt-1">학생들은 읽기를 피하거나, 단어를 추측하거나, 복잡한 텍스트에 직면했을 때 빠르게 흥미를 잃는 등의 행동을 보일 수 있습니다.</p>
          </div>
          <div>
            <h3 className="font-medium text-indigo-600">안구 추적 분석의 중요성 [10:43]</h3>
            <p className="text-sm text-gray-600 mt-1">독해력이 낮은 학생들은 텍스트의 핵심 정보보다는 덜 중요한 부분이나 공백에 집중하는 경향이 있습니다.</p>
          </div>
          <div>
            <h3 className="font-medium text-indigo-600">학교 지원의 중요성 [18:22]</h3>
            <p className="text-sm text-gray-600 mt-1">학교는 학생들이 모든 과목에서 학업적 성공에 필수적인 강력한 문해력 기술을 개발할 수 있도록 지원과 리소스를 제공하는 데 중요한 역할을 합니다.</p>
          </div>
        </div>
      </div>
    </>
  );

  // Symptoms Tab Content
  const renderSymptomsTab = () => (
    <>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">문해력 부족 증상 분포</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={literacySymptoms}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {literacySymptoms.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">안구 추적 분석</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={eyeTrackingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="normal" name="일반 학생" fill="#8884d8" />
              <Bar dataKey="struggling" name="독해력 부족 학생" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );

  // Solutions Tab Content
  const renderSolutionsTab = () => (
    <>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">문해력 캠프 접근 방식</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} data={readingStrategies}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="적용된 전략" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">효과적인 문해력 향상 전략</h2>
        <div className="space-y-4">
          <div className="bg-indigo-50 p-4 rounded-md">
            <h3 className="font-medium text-indigo-700">추론 연습 [13:28]</h3>
            <p className="text-sm text-gray-600 mt-2">학생들이 텍스트에 명시적으로 언급되지 않은 정보를 추론하도록 장려하는 활동입니다.</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-md">
            <h3 className="font-medium text-indigo-700">협력적 토론 [07:49]</h3>
            <p className="text-sm text-gray-600 mt-2">학생들이 텍스트를 해석하고 이해를 공유하기 위해 함께 협력하는 활동입니다.</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-md">
            <h3 className="font-medium text-indigo-700">시각화 기법</h3>
            <p className="text-sm text-gray-600 mt-2">학생들이 텍스트 내용을 정신적으로 그림으로 그리도록 돕는 전략입니다.</p>
          </div>
        </div>
      </div>
    </>
  );

  // Results Tab Content
  const renderResultsTab = () => (
    <>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">문해력 캠프 결과</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={literacyCampResults} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="before" name="캠프 전" fill="#8884d8" />
              <Bar dataKey="after" name="캠프 후" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-indigo-700 mb-4">긍정적 결과 [16:44]</h2>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-md">
            <h3 className="font-medium text-green-700">학업 성취도 향상</h3>
            <p className="text-sm text-gray-600 mt-2">문해력 캠프 참가 학생들은 모든 과목에서 성적 향상을 보였습니다.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="font-medium text-blue-700">독해력 향상</h3>
            <p className="text-sm text-gray-600 mt-2">학생들은 더 복잡한 텍스트를 이해하고 분석할 수 있게 되었습니다.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-medium text-purple-700">자신감 증가</h3>
            <p className="text-sm text-gray-600 mt-2">독해력 향상으로 학생들은 학습에 대한 자신감과 동기부여가 증가했습니다.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-md">
            <h3 className="font-medium text-yellow-700">긍정적 태도 발전</h3>
            <p className="text-sm text-gray-600 mt-2">학생들은 읽기와 학습에 대해 더 긍정적인 태도를 발전시켰습니다.</p>
          </div>
        </div>
      </div>
    </>
  );

  // Timeline Tab Content
  const renderTimelineTab = () => (
    <div className="bg-white rounded-lg shadow-md p-6 col-span-2">
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">영상 타임라인</h2>
      <div className="space-y-4">
        {timestampData.map((item, index) => (
          <div key={index} className="flex">
            <div className="w-20 pt-1 text-indigo-700 font-medium">{item.timestamp}</div>
            <div className="ml-4 pb-6 pl-6 border-l-2 border-indigo-200">
              <h3 className="font-medium text-indigo-600">{item.event}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6 font-sans">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-indigo-800">Middle School Literacy Struggles</h1>
            <p className="text-gray-600">영상 분석 대시보드 | 소스: YouTube</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="mr-2">⏱️</span>
              <span>영상 길이: 약 25분 (추정)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="mb-6 bg-white rounded-lg shadow-md p-1">
        <div className="flex space-x-1">
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('overview')}>
            개요
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'symptoms' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('symptoms')}>
            문해력 문제
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'solutions' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('solutions')}>
            해결책
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'results' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('results')}>
            결과 분석
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'timeline' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('timeline')}>
            타임라인
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'symptoms' && renderSymptomsTab()}
        {activeTab === 'solutions' && renderSolutionsTab()}
        {activeTab === 'results' && renderResultsTab()}
        {activeTab === 'timeline' && renderTimelineTab()}
      </div>
    </div>
  );
};

export default Dashboard;