import Screen from '../models/Screen.js';

export const getScreens = async (req, res) => {
  try {
    const screens = await Screen.find();
    res.json(screens);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createScreen = async (req, res) => {
  const { name, totalSeats } = req.body;
  try {
    const screen = new Screen({ name, totalSeats });
    await screen.save();
    res.status(201).json(screen);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
