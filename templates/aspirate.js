//- Formalin template

//- aspirate.js ~~
//
//  This template was pulled from the GitHub repository at
//      https://github.com/benchill/hpath .
//
//  Its original author is Ben C. Hill, M.D.
//
//                                          ~~ last updated by SRW, 20 Jul 2013

section('Aspirate');

sentence({
    format: 'Aspirate is {u v w} with {x y z}.',
    u: ordinal({
        long_name:  'made up of cellular particles',
        short_name: 'cellular particles',
        states:     [off, '']
    }),
    v: ordinal({
        long_name:  'paucicellular',
        short_name: 'paucicellular',
        states:     [off, '']
    }),
    w: ordinal({
        long_name:  'pauciparticulate',
        short_name: 'pauciparticulate',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'trilineage hematopoeisis',
        short_name: 'TLH',
        states:     [off, '']
    }),
    y: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states: [
            off,
            'a mildly increased number of',
            'a significantly increased number of'
        ]
    }),
    z: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states: [
            off,
            'a mildly increased number of',
            'a significantly increased number of'
        ]
    })
});

sentence({
    format: 'The cellular elements are {u v} made up of {w x}.',
    u: ordinal({
        long_name:  'predominantly',
        short_name: 'predominantly',
        states:     [off, '']
    }),
    v: ordinal({
        long_name:  'exclusively',
        short_name: 'exclusively',
        states:     [off, '']
    }),
    w: ordinal({
        long_name:  'blasts',
        short_name: 'blasts',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:     [off, '']
    })
});

sentence({
    format: 'Erythropoiesis and myelopoiesis are {w x y} {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: 'increased',
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: ordinal({
        long_name:  'maturation',
        short_name: 'maturation',
        states: [
            off,
            'with',
            'with sequential',
            'with a normal progressive pattern of'
        ]
    })
});

sentence({
    format: 'Erythropoiesis is {w x y} {z a}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: 'increased',
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: ordinal({
        long_name:  'maturation',
        short_name: 'maturation',
        states: [
            off,
            'with',
            'with sequential',
            'with a normal progressive pattern of'
        ]
    }),
    a: ordinal({
        long_name:  'megaloblastic changes',
        short_name: 'megaloblastic',
        states: [off, 'with', 'with mild', 'with marked']
    })
});

sentence({
    format: 'Myelopoiesis is {w x y} {z}.',
    w: ordinal({
        long_name:  'evident',
        short_name: 'evident',
        states:     [off, '']
    }),
    x: ordinal({
        long_name:  'increased',
        short_name: 'increased',
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased',
        short_name: 'decreased',
        states:     [off, '', 'mildly', 'markedly']
    }),
    z: ordinal({
        long_name:  'maturation',
        short_name: 'maturation',
        states: [
            off,
            'with',
            'with sequential',
            'with a normal progressive pattern of'
        ]
    })
});

sentence({
    format: 'Megakarocytes are {x y y2} with {z a b c}.',
    x: ordinal({
        long_name:  'increased in number',
        short_name: 'increased',
        states:     [off, '', 'mildly', 'markedly']
    }),
    y: ordinal({
        long_name:  'decreased in number',
        short_name: 'decreased',
        states:     [off, '', 'mildly', 'markedly']
    }),
    y2: ordinal({
        long_name:  'adequate',
        short_name: 'adequate',
        states:     [off, '']
    }),
    z: ordinal({
        long_name:  'maturation',
        short_name: 'maturation',
        states:     [off, '']
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable',
        states:     [off, '']
    }),
    b: ordinal({
        long_name:  'hypolobated forms',
        short_name: 'hypolobated',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    }),
    c: ordinal({
        long_name:  'immature forms',
        short_name: 'immature',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    })
});

sentence({
    format: '{x} with {a b} are noted.',
    x: ordinal({
        long_name:  'plasma cells',
        short_name: 'plasma cells',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    }),
    a: ordinal({
        long_name:  'unremarkable morphology',
        short_name: 'unremarkable',
        states:     [off, '']
    }),
    b: ordinal({
        long_name:  'atypical features',
        short_name: 'atypical features',
        states:     [off, 'rare', 'few', 'scattered', 'occasional', 'several']
    })
});

sentence({
    format: 'There is {x} dysplasia.',
    x: ordinal({
        long_name:  'no',
        short_name: 'no',
        states:     [off, '']
    })
});

sentence({
    format: 'There is no {x}.',
    x: ordinal({
        long_name:  'increase in blasts',
        short_name: 'blasts',
        states:     [off, '']
    })
});

sentence({
    format: 'No {x} are noted.',
    x: ordinal({
        long_name:  'lymphoid aggregates',
        short_name: 'lymphoid aggregates',
        states:     [off, '']
    })
});

sentence({
    format: 'Touch imprint {x y}.',
    x: ordinal({
        long_name:  'shows similar findings',
        short_name: 'similar findings',
        states:     [off, '']
    }),
    y: ordinal({
        long_name:  'is paucicellular and inadequate for further evaluation',
        short_name: 'paucicellular',
        states:     [off, '']
    })
});

textbox('Notes');

//- vim:set syntax=javascript:
