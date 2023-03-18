const handler = (req, res) => {
  // 何かしらの処理をここで行う
  const result = `${req.body.name}様`;
  res.status(200).json(result);
};

export default handler;
