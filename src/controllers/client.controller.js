const { getAppStylingDetail } = require('../services/client.service');

const fetchAppStylingDetail = async (req, res) => {
  try {
    const { clientCode } = req.query;

    if (!clientCode) {
      return res.status(400).json({
        message: 'clientId query param is required',
      });
    }

    const data = await getAppStylingDetail(clientCode);
    return res.status(200).json(data);
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const details = error.response?.data || error.message;

    return res.status(statusCode).json({
      message: 'Failed to fetch app styling detail from Strapi',
      details,
    });
  }
};

module.exports = {
  fetchAppStylingDetail,
};
