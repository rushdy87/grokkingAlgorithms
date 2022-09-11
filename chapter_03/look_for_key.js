// find a key in some box in box, wich maybe in anothr box.
// the first selution:
// 1. Make a pile of boxes to look through.
// 2. Grab a box, and look through it.
// 3. Ifyoufindabox,addittothe pile to look through later.
// 4. If you find a key, you’re done!
// 5. Repeat.
const look_for_key = (main_box) => {
  const pile = main_box.make_a_pile_to_look_through();
  while (pile.length) {
    let box = pile.grab_a_box();
    for (item in box) {
      if (item.is_a_key()) {
        pile.push(item);
      } else if (item.is_a_key()) {
        console.log('found the key!');
      }
    }
  }
};

// The second way uses recursion:
// 1. Look through the box.
// 2. Ifyoufindabox,gotostep1.
// 3. If you find a key, you’re done!

const recursion_look_for_key = (main_box) => {
  for (item in box) {
    if (item.is_a_key()) {
      console.log('found the key!');
    } else {
      look_for_key(item);
    }
  }
};
