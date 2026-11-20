# How this clip was made

**Source.** Rockstar Games' official *Grand Theft Auto VI — Launch Trailer*
(YouTube `rz1B4B2yBZY`, 1:30, published 15 Oct 2026; the game launched
19 Nov 2026, the day before this bounty opened). Downloaded at 1080p in the
build session and scanned frame by frame (contact sheets at 3 s and 1 s
intervals) to find the moment.

**The moment.** 46.0–50.6 s of the trailer: a rapid street-action run — red
sports car, a police car drifting across a palm-lined avenue, a dirt bike
launching off a rooftop railing — that peaks with the rider hanging mid-air
against open sky, then landing. One escalating beat with a single clear peak.
It was chosen because the airborne frame is perfectly centred, reads
instantly at phone size, and is pure gameplay energy: exactly what a viewer
stops scrolling for. The Vice City sunset skyline at 24.3–29.3 s carries the
pitch, because it is the calmest, most beautiful shot in the trailer and
gives the text room to be read.

**The edit** (ffmpeg, vertical 1080×1920, 15.7 s total):

1. **The moment, full speed** (4.6 s) — hook text for the first 2.8 s:
   "THIS GTA 6 JUMP / IS INSANE".
2. **The airborne beat again at half speed** (3.4 s) — "WATCH IT AGAIN".
   A replay is the cheapest retention trick a Short has: viewers who missed
   the peak stay for it.
3. **The pitch** (5.0 s) over the sunset sequence, on screen:
   "Make clips like this with AI / and earn money on make.fun" and
   "make.fun/bounty/gta6-clipper-01".
4. **End card** (2.6 s): "MAKE CLIPS. EARN MONEY." + the bounty URL.

The 9:16 crop (608×1080 at x=656, scaled to 1080×1920) keeps the bike, the
police car and the skyline centred. Audio is the trailer's own track
throughout, slowed with the picture on the replay.

**The video.** Published public on YouTube as a Short on the channel
@gta6clip.vault.g; its description carries the bounty's line word for word
and the play code `makefun-stool-lichen-chapel`. `VIDEO.json` in this
repository names its address.

**Published.** The Short is live at https://www.youtube.com/shorts/sqOsK1r1sWY
(public on @gta6clip.vault.g since 20 Nov 2026; YouTube's checks passed with
no issues). This repository at the entered commit is the entry's handover:
`main.ts` validates and passes `VIDEO.json`, which names that address, to
the gate.
