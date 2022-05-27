const photoCards = [
  {
    name: 'Barman',
    name_ru: 'Бармен',
    photo: require('../assets/barman.png'),
    description: "The person drawing the card will share three sips from someone's drink or drinks between a co-player or co-players.",
    description_ru:'Вытянувший карту игрок назначает три глотка от чьего-нибудь напитка или напитков, которые должен выпить партнер или партнеры.',
    state: true
  },
  {
    name: 'Buddy',
    name_ru: 'Приятель',
    photo: require('../assets/buddy.png'),
    description: 'The player with the least amount of a drink left shall ask the player who has drawn the Buddy-card a question about himself/herself. If the answer given by the person who drew the Buddy-card is incorrect. he/she must take a sip from his/her drink. If the answer is correct, then the person who asked the question must take a sip from his/her drirk.',
    description_ru: 'Первым делом определяется игрок, в бокале которого осталось меньше всего напитка.  Этот игрок задает вытянувшему карту "Приятель" игроку вопрос о нем самом. Если вытянувший карту "Приятель" игрок отвечает неверно, он должен отпить глоток из своего бокала. Если вытянувший карту "Приятель" игрок ответит правильно, задавший вопрос игрок должен отпить глоток из своего бокала.',
    state: true
  },
  {
    name: 'Category',
    name_ru: 'Категория',
    photo: require('../assets/category.png'),
    description: 'Pick a category, for example: music genres, beer brands. The next player has to say one item and each following player does the same until someone cannot come up with anything else. That person has to take a sip of his/her drink.',
    description_ru: "Игрок говорит: \"В город прибыл грузовик, полный...\" и должен закончить предложение, назвав какую-нибудь категорию. Например: «В город прибыл грузовик, полный музыкальных жанров». Следующий игрок должен назвать музыкальный жанр и т.д. Тот, кто не сможет продолжить или повторится, должен выпить глоток.",
    state: true
  },
  {
    name: 'Celebrity',
    name_ru: 'Знаменитость',
    photo: require('../assets/celebrity.png'),
    description: 'The person who draws the card will name a category and a letter with which the name and surname or artist name of a celebrity must begin. The player following the person who draws the card will start with naming. The one who fails to name a celebrity must take a sip of their drink.',
    description_ru:'Игрок, которому выпала эта карта называет  категорию и букву, с которой начинается имя и фамилия знаменитости или сценическое имя исполнителя. Называть имена начинает следующий игрок после игрока вытянувшего карту. Отпить глоток своего напитка должен тот, который больше не сможет назвать ни одного имени знаменитости.',
    state: true
  },
  {
    name: 'Word-Chain',
    name_ru: 'Цепочка слов',
    photo: require('../assets/chain.png'),
    description: 'Say a word and the next player has to repeat your word and add another one. The following player repeats all the words in the same order and adds one more word. It continues until someone makes a mistake. That person has to take a sip of his/her drink.',
    description_ru:'Игрок должен сказать слово, следующий повторяет это слово первого и добавляет своё. Следующий игрок повторяет все слова предыдущих игроков добавляет свое слово. Цепочка продолжается до тех пор, пока один из игроков не ошибется. Тот, на ком цепь прервалась, должен выпить.',
    state: true
  },
  {
    name: 'Chin King',
    name_ru: 'Король Подбородка',
    photo: require('../assets/chin_king.png'),
    description: 'The Chin King has the right to hold his/her chin, at any time. Then other players have to hold their chin as well. The last person has to drink. The Chin King title passes on to the next player, who gets the next Chin King card.',
    description_ru: 'Король Подбородка может взяться за свой подбородок, в любое время, когда захочет. Это обязывает других игроков также взяться за подбородок. Тот, кто окажется последним - пьет. Право Короля Подбородка переходит к др. игроку, когда он/она возьмет такую же карту.',
    state: true
  },
  {
    name: 'Choose who drinks',
    name_ru: 'Выбирай, кто пьет',
    photo: require('../assets/choose_who_drinks.png'),
    description: 'You can choose, who has to take a sip from his/her drink.',
    description_ru:'Игрок выбирает, кто пьет.',
    state: true
  },
  {
    name: 'Cocktail',
    name_ru: 'Коктейль',
    photo: require('../assets/cocktail.png'),
    description: 'The person drawing the card starts. All players take turns to pour their drinks to the empty glass on the table. No assisting items can be used for pouring. The drink can be poured only from one’s cup. The person who makes the cocktail overflow from the glass must drink the cocktail.',
    description_ru:'Начинает игрок, чей черед вытягивать карту. Все игроки по очереди немного отливают своего напитка в стоящий на столе пустой бокал. В процессе наливания нельзя пользоваться вспомогательными средствами. Напиток можно отливать только из своего бокала. Тот, по вине которого коктейль перелился через край, должен выпить коктейль.',
    state: true
  },
  {
    name: 'Confiscate',
    name_ru: 'Конфискуй',
    photo: require('../assets/confiscate.png'),
    description: 'You can confiscate a sip of a friend’s drink, a clothing item or whatever you desire, including The Chin King or Question Master title. Your request can be rejected by taking a sip of a drink.',
    description_ru:'Игрок может конфисковать напиток другого игрока, что-то из одежды или то, что пожелает.',
    state: true
  },
  {
    name: 'Do This!',
    name_ru: 'Сделай это!',
    photo: require('../assets/do_it.png'),
    description: 'The first three persons who draw the "Do This!" card will show what the forth player must do. Be ready! The fourth person to draw the "Do This!" card will give you the show worth recording!',
    description_ru: 'Первые три игрока, которым выпала карта "Сделай это!", показывают, что должен делать четвертый игрок, которому выпала эта карта. Будьте готовы! Четвертый игрок, которому выпала карта "Сделай это!", устроит для вас настоящие шоу, которое стоит запечатлеть.',
    state: true
  },
  {
    name: "Skip",
    name_ru: 'Пропускаете ход',
    photo: require('../assets/dont_drink.png'),
    description: 'The player who picks this card misses a turn and the next player takes a card.',
    description_ru: 'Игрок, которому выпала эта карта, пропускает ход.',
    state: true
  },
  {
    name: 'Women Drink',
    name_ru: 'Женщины пьют',
    photo: require('../assets/girls_drink.png'),
    description: 'All females take a sip of their drinks.',
    description_ru: 'Все представители женского пола пьют.',
    state: true
  },
  {
    name: 'Men Drink',
    name_ru: 'Мужчины пьют ',
    photo: require('../assets/guys_drink.png'),
    description: 'All males take a sip of their drinks.',
    description_ru: 'Все представители мужского пола пьют.',
    state: true
  },
  {
    name: 'I have never...',
    name_ru: 'Я никогда не...',
    photo: require('../assets/i_have_never.png'),
    description: 'The person drawing the card will make one statement that he or she has never done/seen etc. The co-player/players who have done/seen etc. it must take a sip of their drinks as punishment.',
    description_ru: 'Вытянувший карту игрок выскажет одно утверждение о том, чего он никогда не делал/не видел и т.п. Партнер/партнеры по игре, которые делали/видели это и т.п., должны в наказание отпить глоток своего напитка.',
    state: true
  },
  {
    name: 'Joker',
    name_ru: 'Джокер',
    photo: require('../assets/joker.png'),
    description: 'The one who has drawn the Joker may double the punishment or the task of someone else. For example, if another player has to make the Yoga-task until his/her turn, the Joker will double it until the next round; if another player has to take a sip from his/her drink as a punishment, the Joker will double the punishment to two sips, etc. The Joker will become invalid as  soon as a new Joker owner appears.',
    description_ru:'Вытянувший карту игрок может удвоить назначенное кому-то наказание. Например, если партнеру по игре нужно выполнить задание Йоги до тех пор, пока черед не дойдет до него, то Джокер повторяет задание ещё на один круг; например, если игрок должен в наказание отпить глоток из своего бокала, то Джокер увеличивает это наказание до двух глотков и т.д. Карта Джокера теряет своё действие, как только определяется новый владелец карты Джокера.',
    state: true
  },
  {
    name: 'Pour into the cup',
    name_ru: 'Налей в стакан',
    photo: require('../assets/pour_into_the_cup.png'),
    description: 'Pour a drop of your drink into the glass in the middle of the circle. The person, who picks the fourth “pour into the cup” card has to drink the whole cup.',
    description_ru:'Игрок должен налить немного своего напитка в стакан стоящий в центре колоды. Четвертый игрок, который получит эту карту. должен выпить то, что находится в этом стакане. И не забывайте про правила.',
    state: true
  },
  {
    name: 'Question Master',
    name_ru: 'Король Вопроса',
    photo: require('../assets/question_king.png'),
    description: "Question Master is a person whose questions must not be answered. If someone answers his/her questions, they have to drink. In case the person remembers not to answer and says: \"You are the Question Master\" instead, then the Question Master has to drink. The title passes on to the next player, who gets the Question Master card.",
    description_ru: 'Король Вопроса - это человек, на вопросы которого нельзя отвечать. Если кто-то отвечает на его вопрос, то отвечающий должен выпить. Но если отвечающий помнит, что отвечать нельзя, и скажет: «Ты — Король Вопроса!», то должен выпить сам Король Вопроса. Титул Короля Вопроса переходит далее игроку, получившему эту карту.',
    state: true
  },
  {
    name: 'Rhyme',
    name_ru:'Рифма',
    photo: require('../assets/rhyme.png'),
    description: 'Make up a sentence; the person next to you has to make a sentence that rhymes with the previous one. The player who cannot come up with a rhyme in at least ten seconds has to drink. The rhymes are not allowed to repeat.',
    description_ru:'Получивший эту карту должен сказать фразу, и сидящий рядом игрок должен придумать рифму с этим предложением и т.д. Кто не придумал рифму в течение 10 секунд, должен выпить. Рифмы не должны повторяться.',
    state: true
  },
  {
    name: 'Rule',
    name_ru: 'Правило ',
    photo: require('../assets/rule.png'),
    description: 'Come up with a rule how everybody has to drink. Think of a rule which does not include a lot of movement. For example saying a word or sentence before drinking or doing a gesture, like holding one arm on the table while drinking. The rules are valid until the end of the game and during “The Waterfall”.',
    description_ru:'Придумай правило, как надо выпить. Лучше придумать такое правило, которое не требует особых движений, например каждый должен сказать слово/предложение до или после питья, или использовать жесты рук, например пить держа одну руку на столе или пить только одной рукой. Правила действуют до конца игры.',
    state: true
  },
  {
    name: 'Seven',
    name_ru: 'Семь',
    photo: require('../assets/seven.png'),
    description: 'The players will count numbers in ascending order, starting from one. If the number has a 7 in it or if the number can be divided by 7, the player must say “Baila” instead of the number and the direction of counting will change. The person who makes a mistake must take a sip of his or her drink as punishment.',
    description_ru:'Игроки по порядку называют цифры по возрастающей, начиная с цифры один (1). Если в названном числе присутствует цифра 7, или если число делится на 7, то вместо цифры игрок должен сказать BAILA, происходит смена направления перечисления цифр. Тот, кто ошибется, должен в наказание отпить глоток своего напитка. Игра продолжается в том направлении, которое действовало до вытягивания карты.',
    state: true
  },
  {
    name: "Let's Share!",
    name_ru: 'Давайте делиться!',
    photo: require('../assets/share.png'),
    description: 'Everyone will give one sip of their drink to co-player on their left.',
    description_ru:'Каждый дает сидящему слева от него игроку отпить глоток своего напитка.',
    state: true
  },
  {
    name: 'Taboo',
    name_ru:'Табу',
    photo: require('../assets/taboo.png'),
    description: 'The person drawing the card will think of something that cannot be done until the end or the game. During the game there will be in total 4 taboos that must be simultaneously followed until the end of the game. The person violating the taboo must take a sip from his or her own glass as punishment.',
    description_ru:'Вытянувший карту игрок устанавливает правило относительно того, что нельзя делать до окончания игры. В ходе игры появится всего 4 табу, которые необходимо одновременно соблюдать до окончания игры. Нарушивший табу должен в наказание отпить глоток из своего бокала',
    state: true
  },
  {
    name: 'Change of direction',
    name_ru:'Смена направления',
    photo: require('../assets/u_turn.png'),
    description: 'The direction of drawing the cards will change - if cards were drawn in clockwise direction, then now the direction will change to counter clockwise and vice versa.',
    description_ru:'Эта карта меняет направление, в котором игроки вытягивают карты. Например: если раньше, играли по часовой стрелке, то теперь игра игра идет против часовой стрелки.',
    state: true
  },
  {
    name: 'VIP',
    name_ru: 'VIP',
    photo: require('../assets/vip.png'),
    description: 'The person drawing the card may use the card once for the purposes of immunity. For example he or she may refuse to take a punishment sip or performing a task. The card will become invalid if immunity is used or if a new VIP card is drawn.',
    description_ru:'Вытянувший карту игрок может один раз использовать карту для своей защиты (иммунитета). Например, он может отказаться от штрафного глотка или выполнения задания. Карта теряет свое действие при использовании иммунитета, или если игрок вновь вытянул карту VIP.',
    state: true
  },
  {
    name: 'Waterfall',
    name_ru:'Водопад',
    photo: require('../assets/waterfall.png'),
    description: "Decide in which direction the waterfall flows. Everybody starts drinking at the same time. After the person who got the card stops drinking, the next player can stop as well and so on. Everyone else has to drink until it is their turn to stop. Before everybody starts, the players should refill their glasses.",
    description_ru:'Игрок, получивший эту карту, выбирает, в каком направлении потечет водопад. Все игроки начинают пить одновременно. Когда игрок, получивший карту «Водопад». прекращает пить, только тогда может прекратить пить следующий игрок и т.д. Все остальные продолжают пить до тех пор, пока не наступит их очередь. Перед началом «водопада» каждый должен наполнить свой бокал или взять достаточно полные бутылки.',
    state: true
  },
  {
    name: 'Yes-Man',
    name_ru: 'Да-человек',
    photo: require('../assets/yes_man.png'),
    description: 'The person drawing the card must answer “Yes"! to absolutely all questions aimed at him or her. If he or she answers differently, the Yes-man must take sip from his or her drink as punishment. The title will be transferred to a person who draws a new "Yes-Man" card.',
    description_ru: 'Вытянувший карту игрок должен абсолютно на все обращенные к нему вопросы отвечать "Да!”. Если он ответит иначе, то в наказание да-человек должен отпить глоток своего напитка. Титул переходит на того, кто вытянет новую карту да-человека.',
    state: true
  },
  {
    name: 'Yoga',
    name_ru: 'Йога',
    photo: require('../assets/yoga.png'),
    description: 'The person drawing the card will appoint a co-player and will show a position that a player must hold until the next turn of the person holding the pose!',
    description_ru:'Вытянувший карту игрок назначает своего партнера по игре и показывает ему позу, которую следует сохранять до его очереди тянуть карту.',
    state: true
  },
  {
    name: 'Drink',
    name_ru:'Вы пьете',
    photo: require('../assets/you_drink.png'),
    description: 'Take a sip of your drink.',
    description_ru: 'Вы должны взять глоток своего напитка.',
    state: true
  },
  
]
export default photoCards


