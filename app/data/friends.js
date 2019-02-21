
var friends = [
  {
    name: "Ahmed",
    photo:
      "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
  },
  {
    name: "Bobbie",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff1%2FDavid_Culler_Portrait.jpg&imgrefurl=https%3A%2F%2Fmg.wikipedia.org%2Fwiki%2FSary%3ADavid_Culler_Portrait.jpg&docid=I9xf_yCivCHhoM&tbnid=SxvnPtZFw7y43M%3A&vet=10ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwh8KBEwEQ..i&w=2442&h=3512&bih=663&biw=790&q=portrait&ved=0ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwh8KBEwEQ&iact=mrc&uact=8",
    scores: [2, 3, 3, 2, 5, 4, 5, 2, 3, 1]
  },
  {
    name: "Jason",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F247917%2Fpexels-photo-247917.jpeg%3Fcs%3Dsrgb%26dl%3Dadult-beard-bushes-247917.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fportrait-of-young-man-in-autumn-247917%2F&docid=d2Ku5XNZOVeSiM&tbnid=DrmW_9WUAHdMpM%3A&vet=10ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwjZAShgMGA..i&w=3966&h=2644&bih=663&biw=790&q=portrait&ved=0ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwjZAShgMGA&iact=mrc&uact=8",
    scores: [3, 3, 3, 3, 3, 3, 5, 3, 2, 2]
  },
  {
    name: "Jessica",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpixnio.com%2Ffree-images%2F2017%2F11%2F30%2F2017-11-30-18-22-26-1200x795.jpg&imgrefurl=https%3A%2F%2Fpixnio.com%2Fpeople%2Ffemale-women%2Ffashion-portrait-woman-face-makeup-attractive-skin-makeup&docid=ew_xFvhcU7cg8M&tbnid=saynbdVKDejPYM%3A&vet=10ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwikASgrMCs..i&w=1200&h=795&bih=663&biw=790&q=portrait&ved=0ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwikASgrMCs&iact=mrc&uact=8",
    scores: [2, 2, 4, 3, 4, 4, 1, 2, 4, 4]
  },
  {
    name: "Fernando",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn10.picryl.com%2Fphoto%2F2003%2F04%2F14%2Ffrank-jimenez-official-portrait-5ca36a-1600.jpg&imgrefurl=https%3A%2F%2Fnara.getarchive.net%2Fmedia%2Ffrank-jimenez-official-portrait-5ca36a&docid=cY3GDy9Lag3zxM&tbnid=zK5fxlcTwt0HpM%3A&vet=12ahUKEwiS9ZXxh8fgAhWPGt8KHQ2AANM4ZBAzKAMwA3oECAEQBA..i&w=1042&h=1600&bih=663&biw=790&q=portrait&ved=2ahUKEwiS9ZXxh8fgAhWPGt8KHQ2AANM4ZBAzKAMwA3oECAEQBA&iact=mrc&uact=8",
    scores: [3, 4, 5, 2, 2, 2, 2, 4, 5, 2]
  },
  {
    name: "Sarah",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F999515%2Fpexels-photo-999515.jpeg%3Fcs%3Dsrgb%26dl%3Dadult-beautiful-beauty-999515.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fwoman-wearing-green-brown-and-pink-sari-dress-portrait-photograph-999515%2F&docid=YyWnR_kiT2hzKM&tbnid=dcagqi-9WciiGM%3A&vet=10ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwijASgqMCo..i&w=1600&h=2400&bih=663&biw=790&q=portrait&ved=0ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwijASgqMCo&iact=mrc&uact=8",
    scores: [3, 4, 5, 2, 1, 4, 4, 5, 1, 3]
  },
  {
    name: "John",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn10.picryl.com%2Fphoto%2F2011%2F02%2F28%2Foffice-of-air-and-radiation-bill-wehrum-portrait-412-apd-714-bill_1whehrum_15x7jpg-1e5dbc-1600.jpg&imgrefurl=https%3A%2F%2Fnara.getarchive.net%2Fmedia%2Foffice-of-air-and-radiation-bill-wehrum-portrait-412-apd-714-bill_1whehrum_15x7jpg-1e5dbc&docid=v9PlpwL0B3Ve9M&tbnid=5JKvChPh3w2GdM%3A&vet=10ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwinASguMC4..i&w=1143&h=1600&itg=1&bih=663&biw=790&q=portrait&ved=0ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwinASguMC4&iact=mrc&uact=8",
    scores: [3, 3, 4, 1, 2, 3, 4, 5, 5, 3]
  },
  {
    name: "Mary",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpixnio.com%2Ffree-images%2F2017%2F11%2F30%2F2017-11-30-18-22-26-1200x795.jpg&imgrefurl=https%3A%2F%2Fpixnio.com%2Fpeople%2Ffemale-women%2Ffashion-portrait-woman-face-makeup-attractive-skin-makeup&docid=ew_xFvhcU7cg8M&tbnid=saynbdVKDejPYM%3A&vet=10ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwikASgrMCs..i&w=1200&h=795&bih=663&biw=790&q=portrait&ved=0ahUKEwiSwKLvhsfgAhWEVt8KHb6-CDoQMwikASgrMCs&iact=mrc&uact=8",
    scores: [5, 2, 3, 4, 1, 1, 1, 3, 5, 5]
  },
  {
    name: "Adam",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.maxpixel.net%2Fstatic%2Fphoto%2F1x%2FBlack-And-White-Look-Man-Tear-Portrait-Sadness-2688715.jpg&imgrefurl=https%3A%2F%2Fwww.maxpixel.net%2FBlack-And-White-Look-Man-Tear-Portrait-Sadness-2688715&docid=Dp5xbaSPDUHXPM&tbnid=iaH7EMGQL4qdqM%3A&vet=12ahUKEwiS9ZXxh8fgAhWPGt8KHQ2AANM4ZBAzKAUwBXoECAEQBg..i&w=960&h=638&bih=663&biw=790&q=portrait&ved=2ahUKEwiS9ZXxh8fgAhWPGt8KHQ2AANM4ZBAzKAUwBXoECAEQBg&iact=mrc&uact=8",
    scores: [3, 4, 5, 2, 1, 1, 5, 5, 2, 5]
  },
  {
    name: "Serge",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.maxpixel.net%2Fstatic%2Fphoto%2F1x%2FMan-Male-Person-Portrait-Human-Male-Face-Person-2785071.jpg&imgrefurl=https%3A%2F%2Fwww.maxpixel.net%2FMan-Male-Person-Portrait-Human-Male-Face-Person-2785071&docid=xAkhT_hQaaB1tM&tbnid=sEPrlubCTXvxbM%3A&vet=12ahUKEwiS9ZXxh8fgAhWPGt8KHQ2AANM4ZBAzKCAwIHoECAEQIQ..i&w=960&h=640&bih=663&biw=790&q=portrait&ved=2ahUKEwiS9ZXxh8fgAhWPGt8KHQ2AANM4ZBAzKCAwIHoECAEQIQ&iact=mrc&uact=8",
    scores: [1, 2, 4, 5, 2, 2, 3, 1, 1, 1]
  },
  {
    name: "Hery",
    photo:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2018%2F11%2F22%2F12%2F50%2Fportrait-3831836_960_720.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fen%2Fportrait-male-pose-beard-mustache-3831836%2F&docid=ip-F7SRoklC4SM&tbnid=Hc2DdW0MYsmQfM%3A&vet=12ahUKEwiS9ZXxh8fgAhWPGt8KHQ2AANM4ZBAzKA4wDnoECAEQDw..i&w=480&h=720&bih=663&biw=790&q=portrait&ved=2ahUKEwiS9ZXxh8fgAhWPGt8KHQ2AANM4ZBAzKA4wDnoECAEQDw&iact=mrc&uact=8",
    scores: [2, 5, 1, 1, 1, 1, 2, 4, 4, 2]
  }
];

module.exports = friends;