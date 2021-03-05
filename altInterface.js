export const events = {
  mainEvent1: {
    pretext:
      "The meandering trail through the woods leads to a cavern, a large troll stands guard at its mouth. It stares at you stupidly.”",
    a: {
      option: "Convince the troll to arm-wrestle you for entry.",
      trait: "melee",
      success: {
        nextEvent: "chooseCorridor",
        message:
          "You win the bout; the troll states its intent to write a scathing tweet about you before leaving.",
      },
      failure: {
        nextEvent: "mainEvent1",
        takeDamage: 20,
        message:
          "Your arm is broken; you return home in shame, the troll’s hastily scrawled recommendation for a physio your only prize. You come back tomorrow.",
      },
    },
    b: {
      option: "Shoot the troll with your bow.",
      trait: "distance",
      success: {
        nextEvent: "chooseCorridor",
        message:
          "You hit the troll in one of its eyes. Not wanting to lose the other three, it retreats into the woods.",
      },
      failure: {
        nextEvent: "mainEvent1",
        takeDamage: 15,
        message:
          "You miss. The troll is angry and threatens to call the neighbourhood watch. You leave before things escalate, and return home in shame. You come back tomorrow.",
      },
    },
    c: {
      option: "Use magic to teach the troll etiquette.",
      trait: "magic",
      success: {
        nextEvent: "chooseCorridor",
        message: "The troll hands you a business card, then grants you entry.",
      },
      failure: {
        nextEvent: "mainEvent1",
        takeDamage: 10,
        message:
          "You mis-cast the spell, and teach the troll too much etiquette. It is now challenging you to a duel. You return home in shame. You come back tomorrow.",
      },
    },
  },
  chooseCorridor: {
    pretext:
      "The winding corridors of the cave split into three, which passage do you take?",
    a: {
      trait: "guaranteed",
      option: "Left passage.",
      success: {
        nextEvent: "leftCorridor",
        message: "",
      },
      failure: {
        nextEvent: "",
        message: "",
      },
    },
    b: {
      trait: "guaranteed",
      option: "Middle passage.",
      success: {
        nextEvent: "middleCorridor",
        message: "",
      },
      failure: {
        nextEvent: "",
        message: "",
      },
    },
    c: {
      option: "Right passage.",
      trait: "guaranteed",
      success: {
        nextEvent: "rightCorridor",
        message: "",
      },
      failure: {
        nextEvent: "",
        message: "",
      },
    },
  },

  leftCorridor: {
    pretext:
      "You find a helpless looking goblin in the passage, it explains that it has tried reinstalling and installing NPM four times but it’s still not working.",
    a: {
      option: "Help the poor goblin.",
      trait: "guaranteed",
      success: {
        nextEvent: "mainEvent2",
        message:
          "You write some 'sudo's and some '-g's. The poor goblin gleefully hands over his horseshoe of +10 luck.",
        increaseLuck: 10,
      },
      failure: {
        nextEvent: "",
        message: "",
      },
    },
    b: {
      option: "Put him out of his misery.",
      trait: "melee",
      success: {
        nextEvent: "mainEvent2",
        message: "He puts up no fight, but you still feel a litte dirty.",
      },
      failure: {
        nextEvent: "mainEvent2",
        takeDamage: 5,
        decreaseStrength: 5,
        message:
          "He won't go down without a fight, he gives you the ol' 1,2 with a horseshoe and flees.",
      },
    },
  },

  middleCorridor: {
    pretext:
      "Yelling from a dingy, poorly lit corner a goblin challenges you to a game of tic-tac-toe. He offers to play for his shiny necklace.",
    a: {
      option: "Play a round with the goblin.", //on success, receive the goblin's necklace, give str
      trait: "luck",
      success: {
        nextEvent: "mainEvent2",
        message:
          "The goblin reluctantly hands you his necklace. You feel stronger when you put it on.",
      },
      failure: {
        nextEvent: "mainEvent2",
        message:
          "You have lost. Jubilant, the goblin blows a raspberry before sending you on your way.",
      },
    },
    b: {
      option: "Fight the goblin for his shiny necklace.",
      trait: "melee",
      success: {
        nextEvent: "mainEvent2",
        message: "The goblin is beaten. You claim its necklace as your own.",
      },
      failure: {
        nextEvent: "mainEvent2",
        message:
          "Too quick for your reflexes, the goblin yells crude insults as it slinks off deeper into the tunnels.",
      },
    },
  },

  rightCorridor: {
    pretext:
      "A squeal from above alerts you to a young goblin ensnared and hoisted to the ceiling. Caught in his own trap, he pleads for your help.",
    a: {
      option: "Attempt to sever the rope with a well-placed arrow",
      trait: "distance",
      success: {
        nextEvent: "mainEvent2",
        increaseHealth: 10,
        message:
          "The arrow whistles through the air, cleanly severing the rope. The goblin is bruised but thankful, he shows you a picture of his wife and kids over a pint of healing mead.", //on success +10 health.
      },
      failure: {
        nextEvent: "mainEvent2",
        message:
          "The arrow whistles through the air, then it whistles into the goblin's left foot. You wince and shuffle off before he makes a scene. He's not worth two arrows.",
      },
    },
    b: {
      option: "Leave him to his fate, he's not worth an arrow.",
      trait: "guaranteed",
      success: {
        nextEvent: "mainEvent2",
        message:
          "You shoot him a wink, then stroll off humming a misremembered rendition of the 'Law and Order' theme tune.",
      },
      failure: {
        nextEvent: "",
        message: "",
      },
    },
  },
  mainEvent2: {
    pretext:
      "Deeper in the cave, you come upon a dragon. It sits on a hoard of discarded Marlboro red cartons. Its deep voice hangs heavy in the tobacco-laden air as it explains its predicament: it was cursed by a wizard to smoke reds in this cave for eternity. It offers you information in return for your help.",
    a: {
      option: "Attempt to use magic to break the curse.",
      trait: "magic",
      success: {
        nextEvent: "choosePathway",
        increaseHealth: 10,
        message:
          'The dragon is grateful for your intervention. "I know you seek the monk\'s lost loafers, you are on the right path." As a parting gift, the dragon gifts you a pack of reds. Your health increases by 10.',
      },
      failure: {
        nextEvent: "choosePathway",
        decreaseHealth: 20,
        message:
          "The spell backfires, the dragon's nicotine addiction intensifies. The dragon swipes at you with its baccy-stained claws in anger, you lose ten health but escape.",
      },
    },
    b: {
      option:
        "Probe the dragon for information, ask directly about the location of the monk's loafers.",
      trait: "luck",
      success: {
        nextEvent: "choosePathway",
        message:
          "The dragon is convinced by your polite manner, and tells you that the loafers you seek are close. You move on from the smoke-filled chamber.",
      },
      failure: {
        nextEvent: "GAME OVER",
        message:
          "The dragon is insulted by the direct nature of your question. It eats you",
      },
    },
    c: {
      option: "Attempt to kill the dragon with your bow.",
      trait: "distance",
      success: {
        nextEvent: "choosePath",
        increaseDistance: 5,
        message:
          "Your arrow strikes the dragon in its eye. Any information it had dies with it.",
      },
      failure: {
        nextEvent: "choosePath",
        message:
          "The arrow misses, knocking the freshly lit blem out of the dragon's mouth. It charges at you in fury, you escape but are harmed by falling rocks.",
        decreaseHealth: 25,
      },
    },
  },
  choosePathway: {
    pretext:
      "You emerge from the cave and come upon a mountain, there is a rocky pathway coming through it as well as some climbable rocks. You could also walk around the mountain.",
    a: {
      option: "Take the pathway that goes through the mountain.",
      trait: "guaranteed",
      success: {
        nextEvent: "rockyPathway",
        message: "",
      },
      failure: {
        nextEvent: "",
        message: "",
      },
    },
    b: {
      option: "Attempt to climb the rocks.",
      trait: "guaranteed",
      success: {
        nextEvent: "climbRocks",
        message: "",
      },
      failure: {
        nextEvent: "",
        message: "",
      },
    },
    c: {
      option: "Go around the mountain.",
      trait: "guaranteed",
      success: {
        nextEvent: "goAround",
        message: "",
      },
      failure: {
        nextEvent: "",
        message: "",
      },
    },
  },
};
