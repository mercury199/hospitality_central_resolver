const { requestOtp, verifyOtp, requestPasswordResetOtp } = require('../services/otp.service');

const sendOtp = async (req, res) => {
  try {
    const { email, clientCode, firstName, lastName } = req.body;
    

    if (!email || !clientCode) {
      return res.status(400).json({
        message: 'email and clientCode are required',
      });
    }

    const result = await requestOtp({ email, clientCode, firstName, lastName });

    return res.status(200).json({
      message: 'OTP sent successfully',
      data: {
        id: result.id,
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        clientCode: result.clientCode,
        expiresAt: result.expiresAt,
      },
    });
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const details = error.response?.data || error.message;

    return res.status(statusCode).json({
      message: 'Failed to send OTP',
      details,
    });
  }
};

const validateOtp = async (req, res) => {
  try {
    const { email, clientCode, otp } = req.body;

    if (!email || !clientCode || !otp) {
      return res.status(400).json({
        message: 'email, clientCode and otp are required',
      });
    }

    const result = await verifyOtp({ email, clientCode, otp });

    return res.status(200).json({
      message: 'OTP verified successfully',
      data: {
        id: result.id,
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        clientCode: result.clientCode,
        isvalidate: result.isvalidate,
      },
    });
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const details = error.response?.data || error.message;

    return res.status(statusCode).json({
      message: typeof details === 'object' && details.message ? details.message : 'Failed to verify OTP',
      details,
    });
  }
};

const forgotPasswordOtp = async (req, res) => {
  try {
    const { email, clientCode } = req.body;

    if (!email || !clientCode) {
      return res.status(400).json({
        message: 'email and clientCode are required',
      });
    }

    const result = await requestPasswordResetOtp({ email, clientCode });

    return res.status(200).json({
      message: 'OTP sent successfully',
      data: {
        id: result.id,
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        clientCode: result.clientCode,
        expiresAt: result.expiresAt,
      },
    });
  } catch (error) {
    const statusCode = error.response?.status || 500;
    const details = error.response?.data || error.message;

    return res.status(statusCode).json({
      message: typeof details === 'object' && details.message ? details.message : 'Failed to send OTP',
      details,
    });
  }
};

module.exports = {
  sendOtp,
  validateOtp,
  forgotPasswordOtp,
};
