//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Alexqwinta
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>–°loudFunction of Alexqwinta!</font><br><b>App Version 1.44</b>";
  res.status(200).send(message);
};
