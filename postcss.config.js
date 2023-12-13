module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
        browsers: ['Chrome >= 50', 'Firefox >= 50', 'Edge >= 12', 'Safari >= 9']
    }),
    ],
};