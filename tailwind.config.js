/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './include/**/*.{html,php,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'reguler': "'Poppins', ...",
      },
      boxShadow:{
        'dot': '0px 4.10138px 8.20276px rgba(16, 86, 191, 0.5)',
        'filter':'16.1194px 29.936px 110px rgba(0, 0, 0, 0.04), 10.4478px 19.403px 64.4213px rgba(0, 0, 0, 0.0303704), 6.20895px 11.5309px 35.037px rgba(0, 0, 0, 0.0242963), 3.22388px 5.9872px 17.875px rgba(0, 0, 0, 0.02), 1.31343px 2.43923px 8.96296px rgba(0, 0, 0, 0.0157037), 0.298507px 0.554371px 4.3287px rgba(0, 0, 0, 0.00962963)', 
        'card':'19.4381px 36.0993px 117px rgba(0, 0, 0, 0.07), 11.4451px 21.2553px 61.0272px rgba(0, 0, 0, 0.050624), 5.87808px 10.9164px 28.6416px rgba(0, 0, 0, 0.039312), 2.36367px 4.38968px 12.5424px rgba(0, 0, 0, 0.030688), 0.528716px 0.981901px 5.4288px rgba(0, 0, 0, 0.019376)',
        'card2':'27.4092px 58.7341px 46.8519px rgba(0, 0, 0, 0.0911111), 16.2889px 34.9048px 25.4815px rgba(0, 0, 0, 0.0728889), 8.45771px 18.1237px 13px rgba(0, 0, 0, 0.06), 3.44573px 7.38371px 6.51852px rgba(0, 0, 0, 0.0471111), 0.783121px 1.67812px 3.14815px rgba(0, 0, 0, 0.0288889)',
      },
      backgroundColor:{
        'gradasi':'linear-gradient(180deg, #F6FCFF 8.84%, rgba(246, 252, 255, 0) 90.09%)',
      },
      screens:{
        'mobile':'640px',
        'laptop':'1024px',
        'desktop':'1280px',        
      },
    },
  },
  plugins: [],
}
