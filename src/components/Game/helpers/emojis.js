const emojis = [
  '😄',
  '😃',
  '😀',
  '😊',
  '☺',
  '😉',
  '😍',
  '😘',
  '😚',
  '😗',
  '😙',
  '😜',
  '😝',
  '😛',
  '😳',
  '😁',
  '😔',
  '😌',
  '😒',
  '😞',
  '😣',
  '😢',
  '😂',
  '😭',
  '😪',
  '😥',
  '😰',
  '😅',
  '😓',
  '😩',
  '😫',
  '😨',
  '😱',
  '😠',
  '😡',
  '😤',
  '😖',
  '😆',
  '😋',
  '😷',
  '😎',
  '😴',
  '😵',
  '😲',
  '😟',
  '😦',
  '😧',
  '😈',
  '👿',
  '😮',
  '😬',
  '😐',
  '😕',
  '😯',
  '😶',
  '😇',
  '😏',
  '😑',
  '👲',
  '👳',
  '👮',
  '👷',
  '💂',
  '👶',
  '👦',
  '👧',
  '👨',
  '👩',
  '👴',
  '👵',
  '👱',
  '👼',
  '👸',
  '😺',
  '😸',
  '😻',
  '😽',
  '😼',
  '🙀',
  '😿',
  '😹',
  '😾',
  '👹',
  '👺',
  '🙈',
  '🙉',
  '🙊',
  '💀',
  '👽',
  '💩',
  '🔥',
  '✨',
  '🌟',
  '💫',
  '💥',
  '💢',
  '💦',
  '💧',
  '💤',
  '💨',
  '👂',
  '👀',
  '👃',
  '👅',
  '👄',
  '👍',
  '👎',
  '👌',
  '👊',
  '✊',
  '✌',
  '👋',
  '✋',
  '👐',
  '👆',
  '👇',
  '👉',
  '👈',
  '🙌',
  '🙏',
  '☝',
  '👏',
  '💪',
  '🚶',
  '🏃',
  '💃',
  '👫',
  '👪',
  '👬',
  '👭',
  '💏',
  '💑',
  '👯',
  '🙆',
  '🙅',
  '💁',
  '🙋',
  '💆',
  '💇',
  '💅',
  '👰',
  '🙎',
  '🙍',
  '🙇',
  '🎩',
  '👑',
  '👒',
  '👟',
  '👞',
  '👡',
  '👠',
  '👢',
  '👕',
  '👔',
  '👚',
  '👗',
  '🎽',
  '👖',
  '👘',
  '👙',
  '💼',
  '👜',
  '👝',
  '👛',
  '👓',
  '🎀',
  '🌂',
  '💄',
  '💛',
  '💙',
  '💜',
  '💚',
  '❤',
  '💔',
  '💗',
  '💓',
  '💕',
  '💖',
  '💞',
  '💘',
  '💌',
  '💋',
  '💍',
  '💎',
  '👤',
  '👥',
  '💬',
  '👣',
  '💭',
  '🐶',
  '🐺',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🐸',
  '🐯',
  '🐨',
  '🐻',
  '🐷',
  '🐽',
  '🐮',
  '🐗',
  '🐵',
  '🐒',
  '🐴',
  '🐑',
  '🐘',
  '🐼',
  '🐧',
  '🐦',
  '🐤',
  '🐥',
  '🐣',
  '🐔',
  '🐍',
  '🐢',
  '🐛',
  '🐝',
  '🐜',
  '🐞',
  '🐌',
  '🐙',
  '🐚',
  '🐠',
  '🐟',
  '🐬',
  '🐳',
  '🐋',
  '🐄',
  '🐏',
  '🐀',
  '🐃',
  '🐅',
  '🐇',
  '🐉',
  '🐎',
  '🐐',
  '🐓',
  '🐕',
  '🐖',
  '🐁',
  '🐂',
  '🐲',
  '🐡',
  '🐊',
  '🐫',
  '🐪',
  '🐆',
  '🐈',
  '🐩',
  '🐾',
  '💐',
  '🌸',
  '🌷',
  '🍀',
  '🌹',
  '🌻',
  '🌺',
  '🍁',
  '🍃',
  '🍂',
  '🌿',
  '🌾',
  '🍄',
  '🌵',
  '🌴',
  '🌲',
  '🌳',
  '🌰',
  '🌱',
  '🌼',
  '🌐',
  '🌞',
  '🌝',
  '🌚',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌕',
  '🌖',
  '🌗',
  '🌘',
  '🌜',
  '🌛',
  '🌙',
  '🌍',
  '🌎',
  '🌏',
  '🌋',
  '🌌',
  '🌠',
  '⭐',
  '☀',
  '⛅',
  '☁',
  '⚡',
  '☔',
  '❄',
  '⛄',
  '🌀',
  '🌁',
  '🌈',
  '🌊',
  '🎍',
  '💝',
  '🎎',
  '🎒',
  '🎓',
  '🎏',
  '🎆',
  '🎇',
  '🎐',
  '🎑',
  '🎃',
  '👻',
  '🎅',
  '🎄',
  '🎁',
  '🎋',
  '🎉',
  '🎊',
  '🎈',
  '🎌',
  '🔮',
  '🎥',
  '📷',
  '📹',
  '📼',
  '💿',
  '📀',
  '💽',
  '💾',
  '💻',
  '📱',
  '☎',
  '📞',
  '📟',
  '📠',
  '📡',
  '📺',
  '📻',
  '🔊',
  '🔉',
  '🔈',
  '🔇',
  '🔔',
  '🔕',
  '📢',
  '📣',
  '⏳',
  '⌛',
  '⏰',
  '⌚',
  '🔓',
  '🔒',
  '🔏',
  '🔐',
  '🔑',
  '🔎',
  '💡',
  '🔦',
  '🔆',
  '🔅',
  '🔌',
  '🔋',
  '🔍',
  '🛁',
  '🛀',
  '🚿',
  '🚽',
  '🔧',
  '🔩',
  '🔨',
  '🚪',
  '🚬',
  '💣',
  '🔫',
  '🔪',
  '💊',
  '💉',
  '💰',
  '💴',
  '💵',
  '💷',
  '💶',
  '💳',
  '💸',
  '📲',
  '📧',
  '📥',
  '📤',
  '✉',
  '📩',
  '📨',
  '📯',
  '📫',
  '📪',
  '📬',
  '📭',
  '📮',
  '📦',
  '📝',
  '📄',
  '📃',
  '📑',
  '📊',
  '📈',
  '📉',
  '📜',
  '📋',
  '📅',
  '📆',
  '📇',
  '📁',
  '📂',
  '✂',
  '📌',
  '📎',
  '✒',
  '✏',
  '📏',
  '📐',
  '📕',
  '📗',
  '📘',
  '📙',
  '📓',
  '📔',
  '📒',
  '📚',
  '📖',
  '🔖',
  '📛',
  '🔬',
  '🔭',
  '📰',
  '🎨',
  '🎬',
  '🎤',
  '🎧',
  '🎼',
  '🎵',
  '🎶',
  '🎹',
  '🎻',
  '🎺',
  '🎷',
  '🎸',
  '👾',
  '🎮',
  '🃏',
  '🎴',
  '🀄',
  '🎲',
  '🎯',
  '🏈',
  '🏀',
  '⚽',
  '⚾',
  '🎾',
  '🎱',
  '🏉',
  '🎳',
  '⛳',
  '🚵',
  '🚴',
  '🏁',
  '🏇',
  '🏆',
  '🎿',
  '🏂',
  '🏊',
  '🏄',
  '🎣',
  '☕',
  '🍵',
  '🍶',
  '🍼',
  '🍺',
  '🍻',
  '🍸',
  '🍹',
  '🍷',
  '🍴',
  '🍕',
  '🍔',
  '🍟',
  '🍗',
  '🍖',
  '🍝',
  '🍛',
  '🍤',
  '🍱',
  '🍣',
  '🍥',
  '🍙',
  '🍘',
  '🍚',
  '🍜',
  '🍲',
  '🍢',
  '🍡',
  '🍳',
  '🍞',
  '🍩',
  '🍮',
  '🍦',
  '🍨',
  '🍧',
  '🎂',
  '🍰',
  '🍪',
  '🍫',
  '🍬',
  '🍭',
  '🍯',
  '🍎',
  '🍏',
  '🍊',
  '🍋',
  '🍒',
  '🍇',
  '🍉',
  '🍓',
  '🍑',
  '🍈',
  '🍌',
  '🍐',
  '🍍',
  '🍠',
  '🍆',
  '🍅',
  '🌽',
  '🏠',
  '🏡',
  '🏫',
  '🏢',
  '🏣',
  '🏥',
  '🏦',
  '🏪',
  '🏩',
  '🏨',
  '💒',
  '⛪',
  '🏬',
  '🏤',
  '🌇',
  '🌆',
  '🏯',
  '🏰',
  '⛺',
  '🏭',
  '🗼',
  '🗾',
  '🗻',
  '🌄',
  '🌅',
  '🌃',
  '🗽',
  '🌉',
  '🎠',
  '🎡',
  '⛲',
  '🎢',
  '🚢',
  '⛵',
  '🚤',
  '🚣',
  '⚓',
  '🚀',
  '✈',
  '💺',
  '🚁',
  '🚂',
  '🚊',
  '🚉',
  '🚞',
  '🚆',
  '🚄',
  '🚅',
  '🚈',
  '🚇',
  '🚝',
  '🚋',
  '🚃',
  '🚎',
  '🚌',
  '🚍',
  '🚙',
  '🚘',
  '🚗',
  '🚕',
  '🚖',
  '🚛',
  '🚚',
  '🚨',
  '🚓',
  '🚔',
  '🚒',
  '🚑',
  '🚐',
  '🚲',
  '🚡',
  '🚟',
  '🚠',
  '🚜',
  '💈',
  '🚏',
  '🎫',
  '🚦',
  '🚥',
  '⚠',
  '🚧',
  '🔰',
  '⛽',
  '🏮',
  '🎰',
  '♨',
  '🗿',
  '🎪',
  '🎭',
  '📍',
  '🚩',
  '⬆',
  '⬇',
  '⬅',
  '➡',
  '🔠',
  '🔡',
  '🔤',
  '↗',
  '↖',
  '↘',
  '↙',
  '↔',
  '↕',
  '🔄',
  '◀',
  '▶',
  '🔼',
  '🔽',
  '↩',
  '↪',
  'ℹ',
  '⏪',
  '⏩',
  '⏫',
  '⏬',
  '⤵',
  '⤴',
  '🆗',
  '🔀',
  '🔁',
  '🔂',
  '🆕',
  '🆙',
  '🆒',
  '🆓',
  '🆖',
  '📶',
  '🎦',
  '🈁',
  '🈯',
  '🈳',
  '🈵',
  '🈴',
  '🈲',
  '🉐',
  '🈹',
  '🈺',
  '🈶',
  '🈚',
  '🚻',
  '🚹',
  '🚺',
  '🚼',
  '🚾',
  '🚰',
  '🚮',
  '🅿',
  '♿',
  '🚭',
  '🈷',
  '🈸',
  '🈂',
  'Ⓜ',
  '🛂',
  '🛄',
  '🛅',
  '🛃',
  '🉑',
  '㊙',
  '㊗',
  '🆑',
  '🆘',
  '🆔',
  '🚫',
  '🔞',
  '📵',
  '🚯',
  '🚱',
  '🚳',
  '🚷',
  '🚸',
  '⛔',
  '✳',
  '❇',
  '❎',
  '✅',
  '✴',
  '💟',
  '🆚',
  '📳',
  '📴',
  '🅰',
  '🅱',
  '🆎',
  '🅾',
  '💠',
  '➿',
  '♻',
  '♈',
  '♉',
  '♊',
  '♋',
  '♌',
  '♍',
  '♎',
  '♏',
  '♐',
  '♑',
  '♒',
  '♓',
  '⛎',
  '🔯',
  '🏧',
  '💹',
  '💲',
  '💱',
  '©',
  '®',
  '™',
  '〽',
  '〰',
  '🔝',
  '🔚',
  '🔙',
  '🔛',
  '🔜',
  '❌',
  '⭕',
  '❗',
  '❓',
  '❕',
  '❔',
  '🔃',
  '🕛',
  '🕧',
  '🕐',
  '🕜',
  '🕑',
  '🕝',
  '🕒',
  '🕞',
  '🕓',
  '🕟',
  '🕔',
  '🕠',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
  '🕡',
  '🕢',
  '🕣',
  '🕤',
  '🕥',
  '🕦',
  '✖',
  '➕',
  '➖',
  '➗',
  '♠',
  '♥',
  '♣',
  '♦',
  '💮',
  '💯',
  '✔',
  '☑',
  '🔘',
  '🔗',
  '➰',
  '🔱',
  '🔲',
  '🔳',
  '◼',
  '◻',
  '◾',
  '◽',
  '▪',
  '▫',
  '🔺',
  '⬜',
  '⬛',
  '⚫',
  '⚪',
  '🔴',
  '🔵',
  '🔻',
  '🔶',
  '🔷',
  '🔸',
  '🔹',
];

export { emojis };
