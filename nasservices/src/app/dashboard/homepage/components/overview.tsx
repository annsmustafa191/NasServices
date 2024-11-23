export default function Overview(props : any)
{
    return(
        <>
            <div className="p-4  rounded-2xl shadow-xl bg-[#FFFFFF]">
            <div className='flex flex-col gap-5'>
            <div className='flex justify-between'>
            <div className='flex flex-row justify-center items-center gap-3'>  
                <div> 
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="20" fill="#444658"/>
                  <path d="M33.25 31.875C33.25 32.6313 32.6313 33.25 31.875 33.25H7.125C6.36875 33.25 5.75 32.6313 5.75 31.875C5.75 31.1188 6.36875 30.5 7.125 30.5H31.875C32.6313 30.5 33.25 31.1188 33.25 31.875ZM11.25 27.75C12.0063 27.75 12.625 27.1313 12.625 26.375V7.125C12.625 6.36875 12.0063 5.75 11.25 5.75C10.4938 5.75 9.875 6.36875 9.875 7.125V26.375C9.875 27.1313 10.4938 27.75 11.25 27.75ZM22.25 27.75C23.0063 27.75 23.625 27.1313 23.625 26.375V20.875C23.625 20.1188 23.0063 19.5 22.25 19.5C21.4938 19.5 20.875 20.1188 20.875 20.875V26.375C20.875 27.1313 21.4938 27.75 22.25 27.75ZM16.75 27.75C17.5063 27.75 18.125 27.1313 18.125 26.375V15.375C18.125 14.6188 17.5063 14 16.75 14C15.9938 14 15.375 14.6188 15.375 15.375V26.375C15.375 27.1313 15.9938 27.75 16.75 27.75ZM27.75 27.75C28.5063 27.75 29.125 27.1313 29.125 26.375V9.875C29.125 9.11875 28.5063 8.5 27.75 8.5C26.9938 8.5 26.375 9.11875 26.375 9.875V26.375C26.375 27.1313 26.9938 27.75 27.75 27.75Z" fill="white"/>
                 </svg>
                </div>
                 <div className="mr-[340px] mt-[10px]"> 
                    <p> Overview </p>
                 </div>
            </div>
            <div>
                <button type="button" className="font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center shadow-md">
                       Filters
                 <svg width="12.000000" height="8.000000" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <desc>
                      Created with Pixso.
                   </desc>
                    <defs />
                     <path id="Vector" d="M5.33 8L6.66 8C7.03 8 7.33 7.7 7.33 7.33C7.33 6.96 7.03 6.66 6.66 6.66L5.33 6.66C4.96 6.66 4.66 6.96 4.66 7.33C4.66 7.7 4.96 8 5.33 8ZM0.66 0C0.29 0 0 0.29 0 0.66C0 1.03 0.29 1.33 0.66 1.33L11.33 1.33C11.7 1.33 12 1.03 12 0.66C12 0.29 11.7 0 11.33 0L0.66 0ZM2.66 4.66L9.33 4.66C9.7 4.66 10 4.36 10 4C10 3.63 9.7 3.33 9.33 3.33L2.66 3.33C2.29 3.33 2 3.63 2 4C2 4.36 2.29 4.66 2.66 4.66Z" fill="#808080" fillOpacity="1.000000" fillRule="nonzero" />
               </svg>
          </button>
        </div> 
     </div>  
     <div className="flex flex-col items-start ml-12 text-[#444658]">

  <div className="flex gap-[230px] w-full mb-4">
    <div>Certificates to be expired</div>
    <div>Gender</div>
  </div>
  <div className="flex gap-[130px] w-full">
  <div className="mt-4">
  <svg width="177" height="177" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_72_2219)">
<circle cx="68.5" cy="68.5" r="64" stroke="#EEEEEE" strokeWidth="9"/>
<path d="M68.6136 4.53502C68.618 2.03047 70.6544 -0.0119005 73.1531 0.158189C86.3758 1.05822 99.0899 5.77924 109.726 13.7945C121.572 22.722 130.201 35.2537 134.314 49.5057C138.427 63.7576 137.803 78.9597 132.535 92.8265C127.806 105.276 119.562 116.046 108.852 123.853C106.829 125.328 104.017 124.685 102.679 122.568C101.341 120.451 101.984 117.664 103.993 116.168C113.049 109.425 120.025 100.219 124.057 89.6055C128.627 77.5748 129.169 64.3856 125.6 52.0206C122.031 39.6557 114.545 28.7832 104.268 21.0378C95.2003 14.2049 84.3926 10.1314 73.1359 9.25082C70.639 9.05549 68.6091 7.03956 68.6136 4.53502Z" fill="#F59E0B"/>
<path d="M53.4799 72.8409V71.1648L58.4174 63.3636H59.8151V65.75H58.9629L55.639 71.017V71.108H62.531V72.8409H53.4799ZM59.031 75V72.3295L59.0538 71.5795V63.3636H61.0424V75H59.031ZM68.9231 63.3636V75H66.8151V65.4148H66.7469L64.0254 67.1534V65.2216L66.9174 63.3636H68.9231ZM78.0992 72.8182V72.2045C78.0992 71.7538 78.1939 71.339 78.3833 70.9602C78.5765 70.5814 78.8568 70.2765 79.2242 70.0455C79.5916 69.8144 80.0367 69.6989 80.5594 69.6989C81.0973 69.6989 81.5481 69.8144 81.9117 70.0455C82.2754 70.2727 82.55 70.5758 82.7356 70.9545C82.925 71.3333 83.0197 71.75 83.0197 72.2045V72.8182C83.0197 73.2689 82.925 73.6837 82.7356 74.0625C82.5462 74.4413 82.2678 74.7462 81.9004 74.9773C81.5367 75.2083 81.0897 75.3239 80.5594 75.3239C80.0291 75.3239 79.5803 75.2083 79.2129 74.9773C78.8454 74.7462 78.567 74.4413 78.3776 74.0625C78.192 73.6837 78.0992 73.2689 78.0992 72.8182ZM79.5822 72.2045V72.8182C79.5822 73.1174 79.6541 73.392 79.7981 73.642C79.942 73.892 80.1958 74.017 80.5594 74.017C80.9269 74.017 81.1788 73.8939 81.3151 73.6477C81.4553 73.3977 81.5254 73.1212 81.5254 72.8182V72.2045C81.5254 71.9015 81.4591 71.625 81.3265 71.375C81.1939 71.1212 80.9382 70.9943 80.5594 70.9943C80.2034 70.9943 79.9515 71.1212 79.8038 71.375C79.656 71.625 79.5822 71.9015 79.5822 72.2045ZM72.1844 66.1591V65.5455C72.1844 65.0909 72.281 64.6742 72.4742 64.2955C72.6674 63.9167 72.9477 63.6136 73.3151 63.3864C73.6825 63.1553 74.1276 63.0398 74.6504 63.0398C75.1844 63.0398 75.6333 63.1553 75.9969 63.3864C76.3644 63.6136 76.6409 63.9167 76.8265 64.2955C77.0121 64.6742 77.1049 65.0909 77.1049 65.5455V66.1591C77.1049 66.6136 77.0102 67.0303 76.8208 67.4091C76.6352 67.7841 76.3587 68.0852 75.9913 68.3125C75.6238 68.5398 75.1769 68.6534 74.6504 68.6534C74.1163 68.6534 73.6655 68.5398 73.2981 68.3125C72.9344 68.0852 72.6579 67.7822 72.4685 67.4034C72.2791 67.0246 72.1844 66.6098 72.1844 66.1591ZM73.6788 65.5455V66.1591C73.6788 66.4621 73.7488 66.7386 73.889 66.9886C74.0329 67.2348 74.2867 67.358 74.6504 67.358C75.014 67.358 75.264 67.2348 75.4004 66.9886C75.5405 66.7386 75.6106 66.4621 75.6106 66.1591V65.5455C75.6106 65.2424 75.5443 64.9659 75.4117 64.7159C75.2791 64.4621 75.0254 64.3352 74.6504 64.3352C74.2905 64.3352 74.0386 64.4621 73.8947 64.7159C73.7507 64.9697 73.6788 65.2462 73.6788 65.5455ZM72.8322 75L80.8322 63.3636H82.2526L74.2526 75H72.8322Z" fill="#444658"/>
</g>
<defs>
<clipPath id="clip0_72_2219">
<rect width="137" height="137" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
<div className="mt-[-6px]">
<svg width="291" height="213" viewBox="0 0 231 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_421_1050)">
<rect x="13" y="13" width="204.699" height="137" rx="8" fill="white"/>
</g>
<path d="M28 47.5C28 45.0147 30.0147 43 32.5 43C34.9853 43 37 45.0147 37 47.5V134H28V47.5Z" fill="url(#paint0_linear_421_1050)"/>
<path d="M44 95.5C44 93.0147 46.0147 91 48.5 91C50.9853 91 53 93.0147 53 95.5V134H44V95.5Z" fill="url(#paint1_linear_421_1050)"/>
<path d="M90.404 82.2809H91.6653L94.6313 89.5252H94.7335L97.6994 82.2809H98.9608V91.0082H97.9722V84.3775H97.8869L95.1597 91.0082H94.2051L91.4778 84.3775H91.3926V91.0082H90.404V82.2809ZM102.87 91.1616C102.455 91.1616 102.078 91.0835 101.74 90.9272C101.402 90.7681 101.134 90.5394 100.935 90.2411C100.736 89.94 100.637 89.5764 100.637 89.1502C100.637 88.7752 100.71 88.4712 100.858 88.2383C101.006 88.0025 101.203 87.8178 101.451 87.6843C101.698 87.5508 101.97 87.4514 102.269 87.386C102.57 87.3178 102.872 87.2639 103.176 87.2241C103.574 87.173 103.897 87.1346 104.144 87.109C104.394 87.0806 104.576 87.0337 104.689 86.9684C104.806 86.9031 104.864 86.7894 104.864 86.6275V86.5934C104.864 86.173 104.749 85.8462 104.519 85.6133C104.291 85.3803 103.946 85.2639 103.483 85.2639C103.003 85.2639 102.627 85.369 102.354 85.5792C102.081 85.7894 101.889 86.0139 101.779 86.2525L100.824 85.9116C100.995 85.5139 101.222 85.2042 101.506 84.9826C101.793 84.7582 102.105 84.6019 102.443 84.5139C102.784 84.423 103.12 84.3775 103.449 84.3775C103.659 84.3775 103.901 84.4031 104.174 84.4542C104.449 84.5025 104.715 84.6033 104.97 84.7568C105.229 84.9102 105.443 85.1417 105.614 85.4514C105.784 85.761 105.87 86.1758 105.87 86.6957V91.0082H104.864V90.1218H104.813C104.745 90.2639 104.631 90.4158 104.472 90.5778C104.313 90.7397 104.101 90.8775 103.837 90.9911C103.573 91.1048 103.25 91.1616 102.87 91.1616ZM103.023 90.2582C103.421 90.2582 103.756 90.1801 104.029 90.0238C104.304 89.8676 104.512 89.6658 104.651 89.4187C104.793 89.1715 104.864 88.9116 104.864 88.6389V87.7184C104.821 87.7695 104.727 87.8164 104.583 87.859C104.441 87.8988 104.276 87.9343 104.088 87.9656C103.904 87.994 103.723 88.0195 103.547 88.0423C103.374 88.0622 103.233 88.0792 103.125 88.0934C102.864 88.1275 102.62 88.1829 102.392 88.2596C102.168 88.3335 101.986 88.4457 101.847 88.5962C101.71 88.744 101.642 88.9457 101.642 89.2014C101.642 89.5508 101.772 89.815 102.03 89.994C102.291 90.1701 102.622 90.2582 103.023 90.2582ZM108.711 82.2809V91.0082H107.705V82.2809H108.711ZM113.297 91.1445C112.666 91.1445 112.122 91.0053 111.665 90.7269C111.21 90.4457 110.86 90.0536 110.612 89.5508C110.368 89.0451 110.246 88.457 110.246 87.7866C110.246 87.1161 110.368 86.5252 110.612 86.0139C110.86 85.4997 111.203 85.0991 111.644 84.8122C112.087 84.5224 112.604 84.3775 113.195 84.3775C113.536 84.3775 113.872 84.4343 114.205 84.548C114.537 84.6616 114.84 84.8462 115.112 85.1019C115.385 85.3548 115.602 85.69 115.764 86.1076C115.926 86.5252 116.007 87.0394 116.007 87.6502V88.0764H110.962V87.207H114.985C114.985 86.8377 114.911 86.5082 114.763 86.2184C114.618 85.9286 114.411 85.6999 114.141 85.5323C113.874 85.3647 113.558 85.2809 113.195 85.2809C112.794 85.2809 112.448 85.3803 112.155 85.5792C111.865 85.7752 111.642 86.0309 111.486 86.3462C111.33 86.6616 111.252 86.9997 111.252 87.3605V87.94C111.252 88.4343 111.337 88.8533 111.507 89.1971C111.681 89.538 111.921 89.798 112.227 89.9769C112.534 90.1531 112.891 90.2411 113.297 90.2411C113.561 90.2411 113.8 90.2042 114.013 90.1303C114.229 90.0536 114.415 89.94 114.571 89.7894C114.727 89.636 114.848 89.4457 114.933 89.2184L115.905 89.4911C115.803 89.8207 115.631 90.1105 115.389 90.3605C115.148 90.6076 114.85 90.8008 114.495 90.94C114.139 91.0764 113.74 91.1445 113.297 91.1445Z" fill="#77838F"/>
<path d="M87.3157 119L91.8381 110.051V109.977H86.57V108.091H94.2244V110.003L89.6967 119H87.3157ZM99.8481 119.24C98.9319 119.236 98.1436 119.011 97.483 118.563C96.8261 118.116 96.32 117.468 95.9649 116.619C95.6134 115.77 95.4394 114.749 95.4429 113.556C95.4429 112.366 95.6187 111.353 95.9703 110.515C96.3254 109.676 96.8314 109.039 97.4884 108.602C98.1489 108.162 98.9355 107.942 99.8481 107.942C100.761 107.942 101.546 108.162 102.203 108.602C102.863 109.043 103.371 109.682 103.726 110.52C104.081 111.354 104.257 112.366 104.253 113.556C104.253 114.753 104.076 115.776 103.721 116.624C103.369 117.473 102.865 118.121 102.208 118.569C101.551 119.016 100.764 119.24 99.8481 119.24ZM99.8481 117.327C100.473 117.327 100.972 117.013 101.345 116.385C101.718 115.756 101.902 114.813 101.899 113.556C101.899 112.729 101.814 112.04 101.643 111.489C101.476 110.939 101.238 110.525 100.929 110.248C100.624 109.971 100.264 109.833 99.8481 109.833C99.2267 109.833 98.7295 110.143 98.3566 110.765C97.9838 111.386 97.7955 112.317 97.792 113.556C97.792 114.394 97.8754 115.094 98.0423 115.655C98.2128 116.212 98.4525 116.631 98.7615 116.912C99.0704 117.189 99.4326 117.327 99.8481 117.327ZM106.806 119.138C106.455 119.138 106.153 119.014 105.901 118.766C105.652 118.513 105.528 118.212 105.528 117.86C105.528 117.512 105.652 117.214 105.901 116.965C106.153 116.717 106.455 116.592 106.806 116.592C107.147 116.592 107.445 116.717 107.701 116.965C107.957 117.214 108.085 117.512 108.085 117.86C108.085 118.094 108.024 118.309 107.903 118.505C107.786 118.696 107.632 118.851 107.44 118.968C107.248 119.082 107.037 119.138 106.806 119.138ZM113.823 119.149C113.07 119.149 112.399 119.011 111.809 118.734C111.223 118.457 110.758 118.075 110.414 117.588C110.069 117.102 109.89 116.544 109.876 115.916H112.113C112.138 116.338 112.315 116.681 112.646 116.944C112.976 117.207 113.368 117.338 113.823 117.338C114.185 117.338 114.505 117.258 114.782 117.098C115.062 116.935 115.28 116.71 115.437 116.422C115.597 116.131 115.676 115.797 115.676 115.42C115.676 115.037 115.595 114.7 115.431 114.408C115.272 114.117 115.05 113.89 114.766 113.727C114.481 113.563 114.157 113.48 113.791 113.476C113.471 113.476 113.16 113.542 112.859 113.673C112.56 113.805 112.328 113.984 112.161 114.211L110.11 113.844L110.627 108.091H117.296V109.977H112.528L112.246 112.709H112.31C112.502 112.439 112.791 112.216 113.178 112.038C113.565 111.86 113.998 111.772 114.478 111.772C115.135 111.772 115.721 111.926 116.236 112.235C116.751 112.544 117.157 112.968 117.456 113.508C117.754 114.044 117.901 114.662 117.898 115.362C117.901 116.097 117.731 116.75 117.386 117.322C117.045 117.89 116.568 118.338 115.953 118.664C115.343 118.988 114.632 119.149 113.823 119.149Z" fill="url(#paint2_linear_421_1050)"/>
<path d="M140.057 91V82.2727H145.29V83.2102H141.114V86.1591H144.898V87.0966H141.114V91H140.057ZM149.227 91.1364C148.597 91.1364 148.053 90.9972 147.595 90.7188C147.141 90.4375 146.79 90.0455 146.543 89.5426C146.298 89.0369 146.176 88.4489 146.176 87.7784C146.176 87.108 146.298 86.517 146.543 86.0057C146.79 85.4915 147.134 85.0909 147.574 84.804C148.017 84.5142 148.534 84.3693 149.125 84.3693C149.466 84.3693 149.803 84.4261 150.135 84.5398C150.467 84.6534 150.77 84.8381 151.043 85.0938C151.315 85.3466 151.533 85.6818 151.695 86.0994C151.857 86.517 151.938 87.0312 151.938 87.642V88.0682H146.892V87.1989H150.915C150.915 86.8295 150.841 86.5 150.693 86.2102C150.548 85.9205 150.341 85.6918 150.071 85.5241C149.804 85.3565 149.489 85.2727 149.125 85.2727C148.724 85.2727 148.378 85.3722 148.085 85.571C147.795 85.767 147.572 86.0227 147.416 86.3381C147.26 86.6534 147.182 86.9915 147.182 87.3523V87.9318C147.182 88.4261 147.267 88.8452 147.438 89.1889C147.611 89.5298 147.851 89.7898 148.158 89.9688C148.464 90.1449 148.821 90.233 149.227 90.233C149.491 90.233 149.73 90.196 149.943 90.1222C150.159 90.0455 150.345 89.9318 150.501 89.7812C150.658 89.6278 150.778 89.4375 150.864 89.2102L151.835 89.483C151.733 89.8125 151.561 90.1023 151.32 90.3523C151.078 90.5994 150.78 90.7926 150.425 90.9318C150.07 91.0682 149.67 91.1364 149.227 91.1364ZM153.467 91V84.4545H154.439V85.4773H154.524C154.661 85.1278 154.881 84.8565 155.185 84.6634C155.489 84.4673 155.854 84.3693 156.28 84.3693C156.712 84.3693 157.071 84.4673 157.358 84.6634C157.648 84.8565 157.874 85.1278 158.036 85.4773H158.104C158.271 85.1392 158.523 84.8707 158.858 84.6719C159.193 84.4702 159.595 84.3693 160.064 84.3693C160.649 84.3693 161.128 84.5526 161.5 84.919C161.872 85.2827 162.058 85.8494 162.058 86.6193V91H161.053V86.6193C161.053 86.1364 160.92 85.7912 160.656 85.5838C160.392 85.3764 160.081 85.2727 159.723 85.2727C159.263 85.2727 158.906 85.4119 158.653 85.6903C158.401 85.9659 158.274 86.3153 158.274 86.7386V91H157.251V86.517C157.251 86.1449 157.131 85.8452 156.889 85.6179C156.648 85.3878 156.337 85.2727 155.956 85.2727C155.695 85.2727 155.45 85.3423 155.223 85.4815C154.999 85.6207 154.817 85.8139 154.678 86.0611C154.541 86.3054 154.473 86.5881 154.473 86.9091V91H153.467ZM165.823 91.1534C165.408 91.1534 165.032 91.0753 164.694 90.919C164.356 90.7599 164.087 90.5312 163.888 90.233C163.69 89.9318 163.59 89.5682 163.59 89.142C163.59 88.767 163.664 88.4631 163.812 88.2301C163.96 87.9943 164.157 87.8097 164.404 87.6761C164.651 87.5426 164.924 87.4432 165.222 87.3778C165.523 87.3097 165.826 87.2557 166.13 87.2159C166.528 87.1648 166.85 87.1264 167.097 87.1009C167.347 87.0724 167.529 87.0256 167.643 86.9602C167.759 86.8949 167.817 86.7812 167.817 86.6193V86.5852C167.817 86.1648 167.702 85.8381 167.472 85.6051C167.245 85.3722 166.9 85.2557 166.437 85.2557C165.957 85.2557 165.58 85.3608 165.308 85.571C165.035 85.7812 164.843 86.0057 164.732 86.2443L163.778 85.9034C163.948 85.5057 164.175 85.196 164.46 84.9744C164.746 84.75 165.059 84.5937 165.397 84.5057C165.738 84.4148 166.073 84.3693 166.403 84.3693C166.613 84.3693 166.854 84.3949 167.127 84.446C167.403 84.4943 167.668 84.5952 167.924 84.7486C168.183 84.902 168.397 85.1335 168.567 85.4432C168.738 85.7528 168.823 86.1676 168.823 86.6875V91H167.817V90.1136H167.766C167.698 90.2557 167.585 90.4077 167.425 90.5696C167.266 90.7315 167.055 90.8693 166.79 90.983C166.526 91.0966 166.204 91.1534 165.823 91.1534ZM165.977 90.25C166.374 90.25 166.71 90.1719 166.982 90.0156C167.258 89.8594 167.465 89.6577 167.604 89.4105C167.746 89.1634 167.817 88.9034 167.817 88.6307V87.7102C167.775 87.7614 167.681 87.8082 167.536 87.8509C167.394 87.8906 167.229 87.9261 167.042 87.9574C166.857 87.9858 166.677 88.0114 166.501 88.0341C166.327 88.054 166.187 88.071 166.079 88.0852C165.817 88.1193 165.573 88.1747 165.346 88.2514C165.121 88.3253 164.94 88.4375 164.8 88.5881C164.664 88.7358 164.596 88.9375 164.596 89.1932C164.596 89.5426 164.725 89.8068 164.984 89.9858C165.245 90.1619 165.576 90.25 165.977 90.25ZM171.664 82.2727V91H170.659V82.2727H171.664ZM176.251 91.1364C175.62 91.1364 175.076 90.9972 174.619 90.7188C174.164 90.4375 173.813 90.0455 173.566 89.5426C173.322 89.0369 173.2 88.4489 173.2 87.7784C173.2 87.108 173.322 86.517 173.566 86.0057C173.813 85.4915 174.157 85.0909 174.597 84.804C175.04 84.5142 175.558 84.3693 176.148 84.3693C176.489 84.3693 176.826 84.4261 177.158 84.5398C177.491 84.6534 177.793 84.8381 178.066 85.0938C178.339 85.3466 178.556 85.6818 178.718 86.0994C178.88 86.517 178.961 87.0312 178.961 87.642V88.0682H173.915V87.1989H177.938C177.938 86.8295 177.864 86.5 177.717 86.2102C177.572 85.9205 177.364 85.6918 177.094 85.5241C176.827 85.3565 176.512 85.2727 176.148 85.2727C175.748 85.2727 175.401 85.3722 175.109 85.571C174.819 85.767 174.596 86.0227 174.44 86.3381C174.283 86.6534 174.205 86.9915 174.205 87.3523V87.9318C174.205 88.4261 174.29 88.8452 174.461 89.1889C174.634 89.5298 174.874 89.7898 175.181 89.9688C175.488 90.1449 175.844 90.233 176.251 90.233C176.515 90.233 176.754 90.196 176.967 90.1222C177.183 90.0455 177.369 89.9318 177.525 89.7812C177.681 89.6278 177.802 89.4375 177.887 89.2102L178.859 89.483C178.756 89.8125 178.585 90.1023 178.343 90.3523C178.102 90.5994 177.803 90.7926 177.448 90.9318C177.093 91.0682 176.694 91.1364 176.251 91.1364Z" fill="#77838F"/>
<path d="M139.884 118V116.338L143.767 112.743C144.098 112.423 144.375 112.135 144.598 111.88C144.826 111.624 144.998 111.374 145.115 111.129C145.232 110.88 145.291 110.612 145.291 110.324C145.291 110.005 145.218 109.729 145.072 109.499C144.927 109.264 144.728 109.085 144.476 108.961C144.224 108.833 143.938 108.769 143.618 108.769C143.284 108.769 142.993 108.836 142.745 108.971C142.496 109.106 142.304 109.3 142.169 109.552C142.034 109.804 141.967 110.104 141.967 110.452H139.778C139.778 109.738 139.939 109.119 140.262 108.593C140.586 108.067 141.038 107.661 141.621 107.373C142.203 107.086 142.874 106.942 143.634 106.942C144.415 106.942 145.096 107.08 145.674 107.357C146.257 107.631 146.71 108.011 147.033 108.497C147.356 108.984 147.517 109.541 147.517 110.17C147.517 110.582 147.436 110.988 147.272 111.39C147.113 111.791 146.827 112.237 146.415 112.727C146.003 113.213 145.422 113.797 144.673 114.479L143.08 116.04V116.114H147.661V118H139.884ZM153.28 106.942C153.841 106.942 154.38 107.036 154.899 107.224C155.421 107.412 155.886 107.712 156.294 108.124C156.706 108.536 157.031 109.083 157.269 109.765C157.511 110.443 157.633 111.276 157.637 112.263C157.637 113.19 157.532 114.017 157.323 114.745C157.117 115.47 156.82 116.086 156.433 116.594C156.046 117.102 155.579 117.489 155.032 117.755C154.485 118.018 153.874 118.149 153.2 118.149C152.472 118.149 151.829 118.009 151.271 117.728C150.714 117.444 150.265 117.059 149.924 116.572C149.586 116.082 149.382 115.532 149.311 114.921H151.586C151.674 115.319 151.861 115.628 152.145 115.848C152.429 116.065 152.781 116.173 153.2 116.173C153.91 116.173 154.45 115.864 154.819 115.246C155.188 114.625 155.375 113.774 155.378 112.695H155.304C155.14 113.014 154.92 113.289 154.643 113.52C154.366 113.748 154.048 113.923 153.69 114.048C153.335 114.172 152.956 114.234 152.555 114.234C151.912 114.234 151.339 114.083 150.835 113.781C150.33 113.479 149.933 113.064 149.641 112.535C149.35 112.006 149.205 111.402 149.205 110.724C149.201 109.992 149.37 109.341 149.711 108.769C150.052 108.197 150.527 107.75 151.138 107.426C151.753 107.1 152.466 106.938 153.28 106.942ZM153.296 108.753C152.937 108.753 152.617 108.838 152.337 109.009C152.06 109.179 151.84 109.408 151.676 109.696C151.516 109.983 151.438 110.305 151.442 110.66C151.442 111.018 151.52 111.342 151.676 111.629C151.836 111.913 152.053 112.141 152.326 112.311C152.603 112.478 152.919 112.561 153.274 112.561C153.541 112.561 153.787 112.512 154.015 112.412C154.242 112.313 154.439 112.176 154.606 112.002C154.776 111.825 154.91 111.62 155.005 111.39C155.101 111.159 155.149 110.914 155.149 110.654C155.146 110.31 155.064 109.994 154.904 109.706C154.744 109.419 154.524 109.188 154.244 109.014C153.963 108.84 153.647 108.753 153.296 108.753ZM160.143 118.138C159.791 118.138 159.49 118.014 159.237 117.766C158.989 117.513 158.865 117.212 158.865 116.86C158.865 116.512 158.989 116.214 159.237 115.965C159.49 115.717 159.791 115.592 160.143 115.592C160.484 115.592 160.782 115.717 161.038 115.965C161.294 116.214 161.421 116.512 161.421 116.86C161.421 117.094 161.361 117.309 161.24 117.505C161.123 117.696 160.969 117.851 160.777 117.968C160.585 118.082 160.374 118.138 160.143 118.138ZM167.16 118.149C166.407 118.149 165.736 118.011 165.146 117.734C164.56 117.457 164.095 117.075 163.751 116.588C163.406 116.102 163.227 115.544 163.213 114.916H165.45C165.475 115.338 165.652 115.681 165.982 115.944C166.313 116.207 166.705 116.338 167.16 116.338C167.522 116.338 167.841 116.258 168.118 116.098C168.399 115.935 168.617 115.71 168.774 115.422C168.933 115.131 169.013 114.797 169.013 114.42C169.013 114.037 168.932 113.7 168.768 113.408C168.608 113.117 168.387 112.89 168.102 112.727C167.818 112.563 167.493 112.48 167.128 112.476C166.808 112.476 166.497 112.542 166.195 112.673C165.897 112.805 165.665 112.984 165.498 113.211L163.447 112.844L163.964 107.091H170.633V108.977H165.865L165.583 111.709H165.647C165.839 111.439 166.128 111.216 166.515 111.038C166.902 110.86 167.335 110.772 167.815 110.772C168.472 110.772 169.058 110.926 169.573 111.235C170.088 111.544 170.494 111.968 170.792 112.508C171.091 113.044 171.238 113.662 171.235 114.362C171.238 115.097 171.068 115.75 170.723 116.322C170.382 116.89 169.905 117.338 169.29 117.664C168.68 117.988 167.969 118.149 167.16 118.149Z" fill="url(#paint3_linear_421_1050)"/>
<defs>
<filter id="filter0_d_421_1050" x="0.5" y="0.5" width="229.699" height="162" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="6.25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.26658 0 0 0 0 0.274505 0 0 0 0 0.345833 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_421_1050"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_421_1050" result="shape"/>
</filter>
<linearGradient id="paint0_linear_421_1050" x1="32.5" y1="43" x2="32.5" y2="134" gradientUnits="userSpaceOnUse">
<stop stopColor="#17BFC2"/>
<stop offset="1" stopColor="#469DE9"/>
</linearGradient>
<linearGradient id="paint1_linear_421_1050" x1="48.5" y1="91" x2="48.5" y2="134" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF63B3"/>
<stop offset="1" stopColor="#F9547C"/>
</linearGradient>
<linearGradient id="paint2_linear_421_1050" x1="102.5" y1="105" x2="102.5" y2="123" gradientUnits="userSpaceOnUse">
<stop stopColor="#17BFC2"/>
<stop offset="1" stopColor="#469DE9"/>
</linearGradient>
<linearGradient id="paint3_linear_421_1050" x1="155.5" y1="104" x2="155.5" y2="122" gradientUnits="userSpaceOnUse">
<stop stopColor="#FF63B3"/>
<stop offset="1" stopColor="#F9547C"/>
</linearGradient>
</defs>
</svg>

</div>
  </div>
</div>
 </div>
</div>
        </>
    );
}