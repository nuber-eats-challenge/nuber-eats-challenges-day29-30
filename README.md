# nuber-eats-challenges-day29-30

<details>
  <summary>
  Day 24-25 정답해설
  </summary>

1. route 설정
- 로그인이야 루트 패스('/')로 설정을 했지만 create-account도 루트가 필요하므로, 설정하도록 합니다.
- ![](https://i.ibb.co/51593NX/logged-out-route.png)
- 위의 코드처럼 솔루션에서는 '/create-account'로 경로를 설정했습니다. 그리고 CreateAccount라는 컴퍼넌트를 렌더링 합니다.
2. CreateAccount
- gql & useMutation: gql을 이용하여 mutation를 쿼리어로 작성 해주도록 합니다. 작성된 쿼리어는 솔루션을 참고해주시면 됩니다. useMutation도 사실 저번 파트의 login과 크게 다를 바가 없어서, 이 부분에서는 설명은 생략하도록 하겠습니다.
- useForm을 이용하여 form 셋업: 사실 useForm도 저번 login 파트와 똑같기 때문에 딱히 설명 드릴 내용이 없습니다. 솔루션에는 단순하게 설정되어 있습니다. 타입스크립트 도움을 받고 싶으신 분들은 제네릭 타입을 넘겨주는 것도 좋은 방법입니다.
- ![](https://i.ibb.co/SBmnVpP/useform-create-account.png)
- 페이지 렌더링
- ![](https://i.ibb.co/J3F3xVQ/screen.png)
- login 페이지 만들 때에는 프론트엔드 처음 부분이었기 때문에 설정할 것이 많았습니다. 그치만 이번에는 설정할 것이 거의 없기 때문에, 이제 바로 페이지 꾸미기에 들어가셔도 됩니다. 이번 솔루션은 .. 설명할 내용이 없기 때문에 jsx를 보고 넘어가도록 하겠습니다.
- 레이아웃 셋업
- ![](https://i.ibb.co/LQ06V2g/layout.png)
- 가장 밖의 div 엘리먼트는 위 코드와 같이 배경과 크기가 지정되어 flex 박스로 지정 되어있습니다. 그 안의 박스 엘리먼트는 max-w-lg 사이즈로 되어 form과 submit을 담게 됩니다.
- ![](https://i.ibb.co/PQ2gJbd/form.png)
- form 엘리먼트의 obSubmit에는 react hook form의 handleSubmit(onValid) 가 전달됩니다. 이렇게 지정해주면 form에서 정보가 제출되면 onValid에는 form설정된 data 값들이 넘어가게 됩니다.
- 아래의 input ref={register...}라고 되어 있는데 노파심에 또 말씀드리지만, 2021. 4월 경에 react hook form 버전7이 나와서 혹시나 버전7을 깔고 진행하신 분들은 버전6처럼 작동을 하지 않을 수 있으니 주의하시기 바랍니다. register에서는 rules 옵션을 이용하여 여러가지 조건을 설정할 수 있습니다. 강의를 충분히 참고하셔서 rules를 풍부하게 사용해보시는 것을 추천드립니다.
- ![](https://i.ibb.co/f0kmD2F/radio.png)
- 위 코드는 솔루션의 lister / host를 고를 수 있는 라디오 버튼 부분입니다. input의 className="hidden"으로 지정되어 있는 것을 볼 수 있습니다. 라디오 버튼을 렌더링 하지 않겠다는 의미입니다.
- label부분에서는 watch가 사용된 것을 볼 수 있습니다. react-hook-form의 useForm에서 나온 함수입니다. getValues와 watch의 차이점은 watch는 렌더링과 관련있기 때문에 반응형으로 렌더링 할 것들이 필요할 때에는 watch를 사용해주시면 됩니다. getValues는 문자그대로 값만 얻을 수 있습니다. 위의 코드에서는 watch 함수로 role값이 변할 때마다 렌더링을 다시 하게 되는데, 조건적으로 className을 지정하여 외형을 꾸며주는 코드입니다.

###결론
react에서 리액트만 순수 사용했을 때보다 react hook form을 사용하면 form 사용하는데에 있어서 코드가 상당히 줄어듭니다. 그리고 더 많은 것을 할 수 있기 때문에 react hook form 사용에 익숙해지시고, tailwindcss 또한 css 작성에 있어서 정말 많은 도움이 되기 때문에 많은 사용을 해보시길 권해드립니다~!
</details>

### Create Account & UI
- 오늘의 강의: 우버 이츠 클론코딩 강의 #17.0 - #17.3 & #17.6 - #17.9 (21.09.20 - 21)
- 오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하세요.

### Code Challenge
- On this two day challenge we are going to build two screens, after the user logs in, the user will go to 'Home', there it can see all the podcasts in a nice list! When the user clicks on a podcast, the user can see the episodes of the podcast. That's it!

- [ ] Podcast List 만들기
- 로그인 후 이동할 페이지입니다.
- 팟캐스트 리스트들을 보여주면 됩니다.
- [ ] Podcast Detail 만들기
- 위의 팟캐스트 리스트 페이지에서 팟캐스트를 클릭하면 나오는 페이지 입니다.
- 팟캐스트의 세부 에피소드들을 보여주시면 됩니다.

Here are two examples of the Google Podcasts app:

Podcasts List
- ![](https://i.imgur.com/7JdseeF.jpg)

Podcast Detail
- ![](https://i.imgur.com/jNijGbz.jpg)



<details>
  <summary>
  Hint
  </summary>

- 페이지를 만드시기 전에 request header에 token을 넘겨주는 작업이 필요합니다.
- context link(setContext)를 활용하여 context에 token을 넘겨줄 수 있습니다.
- recount router dom을 이용하여 podcast detail의 route를 만들어 주세요.
- 테스트 data는 백엔드의 playground에서 충분히 만들고 테스트 해보시는 것을 권해드립니다.
- useQuery를 이용하여 podcast, episode의 data를 백엔드에서 가져온 후 react로 렌더링하면 과제 자체는 완성이 됩니다.
</details>