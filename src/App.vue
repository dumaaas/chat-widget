<template>
  <div
    id="app"
    class="overflow-x-hidden h-screen w-screen bg-[#F3EBE3] relative"
  >
    <div
      class="flex flex-row gap-[85px] flex-wrap items-center xl:justify-between xl:py-0 py-[100px] justify-center h-full max-w-[1220px] mx-auto"
    >
      <h1
        class="md:text-[82px] md:leading-[92px] text-[48px] leading-[56px] text-[#26293b] xl:max-w-[486px] max-w-full xl:text-left text-center"
      >
        A new way to expand your business to London.
      </h1>
      <img
        class="max-w-[620px]"
        :src="require('@/assets/hero.png')"
        alt="hero-img"
      />
    </div>
    <div>
      <div class="absolute top-[5px] right-[5px]">
        <button
          class="rounded-[5px] text-[#26293b] bg-transparent border border-[#DACEBE] px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
        >
          Book a call
        </button>
      </div>
      <div
        :class="[
          selectedIndustry.length && isOpen && chatStep !== 8
            ? 'bottom-[84px]'
            : 'bottom-[15px]',
          'transition-all duration-200 ease-in-out fixed right-[16px] w-[75px] h-[75px] flex items-center justify-center bg-[#6C8C84] rounded-full cursor-pointer z-[999999]',
        ]"
        @click="toggleWidget()"
      >
        <img
          v-if="!isOpen"
          :src="require('@/assets/navOpen.svg')"
          alt="nav-open"
        />
        <img v-else :src="require('@/assets/navClose.svg')" alt="nav-close" />
      </div>
      <div
        :class="[
          isOpen && activeStep == 1
            ? 'right-0 opacity-1'
            : 'right-[-340px] opacity-0',
          ' transition-all duration-500 ease-out absolute bottom-0 right-0 w-[336px] bg-[#26293B] pl-[13px] pb-[18px] pt-[9px] gap-[21px] flex flex-col rounded-tl-[5px]',
        ]"
      >
        <img
          :class="[
            isOpen && activeStep == 1
              ? 'right-[25px] opacity-1'
              : 'right-[-25px] opacity-0',
            'transition-all ease-in-out duration-700 delay-300 absolute top-[-143px] right-[25px] w-[135px]',
          ]"
          :src="require('@/assets/manBody.svg')"
          alt="nav-open"
        />
        <img
          :class="[
            isOpen && activeStep == 1
              ? 'right-[41px] opacity-1'
              : 'right-[-9px] opacity-0',
            'transition-all ease-in-out duration-700 delay-300 absolute w-[120px] right-[41px] top-[-71px]',
          ]"
          :src="require('@/assets/manHand.svg')"
          alt="nav-open"
        />
        <h2 class="text-[18px] leading-[24px] font-secondary text-white">
          Market Insights
        </h2>
        <div>
          <VueSlickCarousel class="market-offer-slider" v-bind="settings">
            <div
              class="pt-[5px] pr-[4px] pl-[9px] pb-[7px] bg-[#FFF9F2] flex flex-col justify-between rounded-[2.5px] gap-[30px] w-[268px]"
            >
              <div class="flex flex-row items-center justify-between">
                <p
                  class="text-[12px] font-secondary leading-[20px] text-[#26293B]"
                >
                  Market Value: UK
                </p>
                <label
                  class="bg-[#DDCDBC] rounded-[2.5px] py-[4px] px-[12.5px] text-[10px] leading-[19px] font-secondary text-[#26293B]"
                >
                  Software
                </label>
              </div>
              <div
                class="flex flex-col justify-between text-[42px] leading-[66px] text-[#26293b] gap-[8px]"
              >
                <h2>£20.29B</h2>
                <p
                  class="text-[12px] font-secondary leading-[20px] text-[#26293B]"
                >
                  Approx 10% of EU Market
                </p>
              </div>
            </div>
            <div
              class="pt-[5px] pr-[4px] pl-[9px] pb-[7px] bg-[#CFEAC7] flex flex-col justify-between rounded-[2.5px] gap-[30px] w-[268px]"
            >
              <div class="flex flex-row items-center justify-between">
                <p
                  class="text-[12px] font-secondary leading-[20px] text-[#26293B]"
                >
                  Investment: UK
                </p>
                <label
                  class="bg-[#DDCDBC] rounded-[2.5px] py-[4px] px-[12.5px] text-[10px] leading-[19px] font-secondary text-[#26293B]"
                >
                  Cyber-Security
                </label>
              </div>
              <div
                class="flex flex-col justify-between text-[42px] leading-[66px] text-[#26293b] gap-[8px]"
              >
                <h2>£2.97B</h2>
                <p
                  class="text-[12px] font-secondary leading-[20px] text-[#26293B]"
                >
                  Approx 10% of EU Market
                </p>
              </div>
            </div>
            <div
              class="pt-[5px] pr-[4px] pl-[9px] pb-[7px] bg-[#FF957D] flex flex-col justify-between rounded-[2.5px] gap-[30px] w-[268px]"
            >
              <div class="flex flex-row items-center justify-between">
                <p
                  class="text-[12px] font-secondary leading-[20px] text-[#26293B]"
                >
                  Total Workforce: UK
                </p>
                <label
                  class="bg-[#DDCDBC] rounded-[2.5px] py-[4px] px-[12.5px] text-[10px] leading-[19px] font-secondary text-[#26293B]"
                >
                  Pharma
                </label>
              </div>
              <div
                class="flex flex-col justify-between text-[42px] leading-[66px] text-[#26293b] gap-[8px]"
              >
                <h2>4600 People</h2>
                <p
                  class="text-[12px] font-secondary leading-[20px] text-[#26293B]"
                >
                  Approx 10% of EU Market
                </p>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
        <div>
          <button
            @click="setActiveStep(2)"
            class="text-[18px] leading-[24px] text-white bg-[#6C8C84] px-[14px] py-[8px] rounded-[5px]"
          >
            Explore your industry
          </button>
        </div>
      </div>
      <div
        :class="[
          activeStep == 2 && isOpen
            ? 'right-0 opacity-1'
            : 'right-[-460px] opacity-0',
          'top-0 h-screen overflow-hidden max-w-[458px] w-[458px] bg-[#26293B] absolute transition-all duration-200 ease-out delay-300',
        ]"
      >
        <div class="flex justify-end p-[5px] border-b border-b-[#64697C]">
          <button
            class="rounded-[5px] text-white bg-transparent border border-[#64697C] px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
          >
            Book a call
          </button>
        </div>
        <div class="px-[28px] py-[34px] flex flex-col gap-[40px]">
          <h2
            class="text-white text-[24px] font-secondary leading-[30px] w-[90%]"
          >
            Which industry data would you like to explore?
          </h2>
          <div class="flex flex-col max-w-[320px] gap-[10px]">
            <div
              @click="setSelectedIndustry('bio-tech')"
              :class="[
                activeStep == 2 && isOpen
                  ? ' translate-y-0 opacity-1'
                  : 'opacity-0',
                selectedIndustry == 'bio-tech'
                  ? 'bg-[#ff957d]'
                  : 'bg-[#fff9f2]',
                'delay-[.5s] transform flex flex-row gap-[12px] bg-[#FFF9F2] rounded-[2.5px] px-[15px] py-[11px] items-center cursor-pointer hover:bg-[#FF957D] group transition-opacity duration-500 ease-in-out',
              ]"
            >
              <div
                :class="[
                  selectedIndustry == 'bio-tech'
                    ? 'bg-[#FFF9F2]'
                    : 'bg-[#DDCDBC]',
                  'w-[28px] h-[28px] rounded-full bg-[#DDCDBC] group-hover:bg-[#FFF9F2] transition-all duration-200 ease-in-out',
                ]"
              ></div>
              <p
                class="text-[18px] leading-[24px] font-secondary text-[#26293B]"
              >
                Bio-Tech
              </p>
            </div>
            <div
              @click="setSelectedIndustry('clean-tech')"
              :class="[
                activeStep == 2 && isOpen
                  ? ' translate-y-0 opacity-1'
                  : 'opacity-0',
                selectedIndustry == 'clean-tech'
                  ? 'bg-[#ff957d]'
                  : 'bg-[#fff9f2]',
                'delay-[.7s] transform flex flex-row gap-[12px] bg-[#FFF9F2] rounded-[2.5px] px-[15px] py-[11px] items-center cursor-pointer hover:bg-[#FF957D] group transition-opacity duration-500 ease-in-out',
              ]"
            >
              <div
                :class="[
                  selectedIndustry == 'clean-tech'
                    ? 'bg-[#FFF9F2]'
                    : 'bg-[#DDCDBC]',
                  'w-[28px] h-[28px] rounded-full bg-[#DDCDBC] group-hover:bg-[#FFF9F2] transition-all duration-200 ease-in-out',
                ]"
              ></div>
              <p
                class="text-[18px] leading-[24px] font-secondary text-[#26293B]"
              >
                Clean-Tech
              </p>
            </div>
            <div
              @click="setSelectedIndustry('cyber-security')"
              :class="[
                activeStep == 2 && isOpen
                  ? ' translate-y-0 opacity-1'
                  : 'opacity-0',
                selectedIndustry == 'cyber-security'
                  ? 'bg-[#ff957d]'
                  : 'bg-[#fff9f2]',
                'delay-[0.9s] transform flex flex-row gap-[12px] bg-[#FFF9F2] rounded-[2.5px] px-[15px] py-[11px] items-center cursor-pointer hover:bg-[#FF957D] group transition-opacity duration-500 ease-in-out',
              ]"
            >
              <div
                :class="[
                  selectedIndustry == 'cyber-security'
                    ? 'bg-[#FFF9F2]'
                    : 'bg-[#DDCDBC]',
                  'w-[28px] h-[28px] rounded-full bg-[#DDCDBC] group-hover:bg-[#FFF9F2] transition-all duration-200 ease-in-out',
                ]"
              ></div>
              <p
                class="text-[18px] leading-[24px] font-secondary text-[#26293B]"
              >
                Cyber-Security
              </p>
            </div>
            <div
              @click="setSelectedIndustry('electronics')"
              :class="[
                activeStep == 2 && isOpen
                  ? ' translate-y-0 opacity-1'
                  : 'opacity-0',
                selectedIndustry == 'electronics'
                  ? 'bg-[#ff957d]'
                  : 'bg-[#fff9f2]',
                'delay-[1.1s] transform flex flex-row gap-[12px] bg-[#FFF9F2] rounded-[2.5px] px-[15px] py-[11px] items-center cursor-pointer hover:bg-[#FF957D] group transition-opacity duration-500 ease-in-out',
              ]"
            >
              <div
                :class="[
                  selectedIndustry == 'electronics'
                    ? 'bg-[#FFF9F2]'
                    : 'bg-[#DDCDBC]',
                  'w-[28px] h-[28px] rounded-full bg-[#DDCDBC] group-hover:bg-[#FFF9F2] transition-all duration-200 ease-in-out',
                ]"
              ></div>
              <p
                class="text-[18px] leading-[24px] font-secondary text-[#26293B]"
              >
                Electronics
              </p>
            </div>
            <div
              @click="setSelectedIndustry('fintech')"
              :class="[
                activeStep == 2 && isOpen
                  ? ' translate-y-0 opacity-1'
                  : 'opacity-0',
                selectedIndustry == 'fintech' ? 'bg-[#ff957d]' : 'bg-[#fff9f2]',
                'delay-[1.3s] transform flex flex-row gap-[12px] bg-[#FFF9F2] rounded-[2.5px] px-[15px] py-[11px] items-center cursor-pointer hover:bg-[#FF957D] group transition-opacity duration-500 ease-in-out',
              ]"
            >
              <div
                :class="[
                  selectedIndustry == 'fintech'
                    ? 'bg-[#FFF9F2]'
                    : 'bg-[#DDCDBC]',
                  'w-[28px] h-[28px] rounded-full bg-[#DDCDBC] group-hover:bg-[#FFF9F2] transition-all duration-200 ease-in-out',
                ]"
              ></div>
              <p
                class="text-[18px] leading-[24px] font-secondary text-[#26293B]"
              >
                Fintech
              </p>
            </div>
            <div
              @click="setSelectedIndustry('med-tech')"
              :class="[
                activeStep == 2 && isOpen
                  ? ' translate-y-0 opacity-1'
                  : 'opacity-0',
                selectedIndustry == 'med-tech'
                  ? 'bg-[#ff957d]'
                  : 'bg-[#fff9f2]',
                'delay-[1.5s] transform flex flex-row gap-[12px] bg-[#FFF9F2] rounded-[2.5px] px-[15px] py-[11px] items-center cursor-pointer hover:bg-[#FF957D] group transition-opacity duration-500 ease-in-out',
              ]"
            >
              <div
                :class="[
                  selectedIndustry == 'med-tech'
                    ? 'bg-[#FFF9F2]'
                    : 'bg-[#DDCDBC]',
                  'w-[28px] h-[28px] rounded-full bg-[#DDCDBC] group-hover:bg-[#FFF9F2] transition-all duration-200 ease-in-out',
                ]"
              ></div>
              <p
                class="text-[18px] leading-[24px] font-secondary text-[#26293B]"
              >
                Med-Tech
              </p>
            </div>
            <div
              @click="setSelectedIndustry('pharmaceuticauls')"
              :class="[
                activeStep == 2 && isOpen
                  ? ' translate-y-0 opacity-1'
                  : 'opacity-0',
                selectedIndustry == 'pharmaceuticauls'
                  ? 'bg-[#ff957d]'
                  : 'bg-[#fff9f2]',
                'delay-[1.7s] transform flex flex-row gap-[12px] bg-[#FFF9F2] rounded-[2.5px] px-[15px] py-[11px] items-center cursor-pointer hover:bg-[#FF957D] group transition-opacity duration-500 ease-in-out',
              ]"
            >
              <div
                :class="[
                  selectedIndustry == 'pharmaceuticauls'
                    ? 'bg-[#FFF9F2]'
                    : 'bg-[#DDCDBC]',
                  'w-[28px] h-[28px] rounded-full bg-[#DDCDBC] group-hover:bg-[#FFF9F2] transition-all duration-200 ease-in-out',
                ]"
              ></div>
              <p
                class="text-[18px] leading-[24px] font-secondary text-[#26293B]"
              >
                Pharmaceuticauls
              </p>
            </div>
            <div
              @click="setSelectedIndustry('software')"
              :class="[
                activeStep == 2 && isOpen
                  ? ' translate-y-0 opacity-1'
                  : 'opacity-0',
                selectedIndustry == 'software'
                  ? 'bg-[#ff957d]'
                  : 'bg-[#fff9f2]',
                'delay-[1.9s] transform flex flex-row gap-[12px] bg-[#FFF9F2] rounded-[2.5px] px-[15px] py-[11px] items-center cursor-pointer hover:bg-[#FF957D] group transition-opacity duration-500 ease-in-out',
              ]"
            >
              <div
                :class="[
                  selectedIndustry == 'software'
                    ? 'bg-[#FFF9F2]'
                    : 'bg-[#DDCDBC]',
                  'w-[28px] h-[28px] rounded-full bg-[#DDCDBC] group-hover:bg-[#FFF9F2] transition-all duration-200 ease-in-out',
                ]"
              ></div>
              <p
                class="text-[18px] leading-[24px] font-secondary text-[#26293B]"
              >
                Software
              </p>
            </div>
          </div>
          <div
            :class="[
              selectedIndustry.length
                ? 'bottom-0 opacity-1'
                : 'bottom-[-100px] opacity-0',
              'transition-all duration-200 ease-in-out absolute left-0 w-full bg-[#FF957D] flex flex-row gap-[20px] justify-between items-center py-[17px] pr-[16px] pl-[20px]',
            ]"
          >
            <p class="text-[16px] text-[#26293B] leading-[24px]">
              Let’s explore the software industry
            </p>
            <button
              @click="setActiveStep(3)"
              class="rounded-[5px] text-[#26293B] bg-white px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div
        :class="[
          activeStep == 3 && isOpen
            ? 'right-0 opacity-1'
            : 'right-[-460px] opacity-0',
          'top-0 overflow-hidden h-screen max-w-[458px] w-[458px] bg-[#FFF9F2] absolute transition-all duration-200 ease-out delay-300',
        ]"
      >
        <div
          class="flex justify-between items-center pl-[20px] px-[5px] py-[5px]"
        >
          <div
            :class="[
              'bottom-0 z-[9999] absolute left-0 w-full bg-[#FF957D] flex flex-row gap-[20px] justify-between items-center py-[17px] pr-[16px] pl-[20px]',
            ]"
          >
            <p class="text-[16px] text-[#26293B] leading-[24px]">
              More data available in our free industry report
            </p>
            <button
              @click="setActiveStep(4)"
              class="rounded-[5px] text-[#26293B] bg-white px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
            >
              Download
            </button>
          </div>
          <div
            class="flex items-center gap-[20px] cursor-pointer"
            @click="setActiveStep(2)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.948"
              height="17.067"
              viewBox="0 0 9.948 17.067"
            >
              <g
                id="Group_74"
                data-name="Group 74"
                transform="translate(-734.01 1401) rotate(-90)"
              >
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x1="7.119"
                  y1="7.119"
                  transform="translate(1399.586 742.543) rotate(180)"
                  fill="none"
                  stroke="#27293a"
                  stroke-linecap="square"
                  stroke-width="2"
                />
                <line
                  id="Line_3"
                  data-name="Line 3"
                  y1="7.119"
                  x2="7.119"
                  transform="translate(1392.467 742.543) rotate(180)"
                  fill="none"
                  stroke="#27293a"
                  stroke-linecap="square"
                  stroke-width="2"
                />
              </g>
            </svg>
            <p class="text-[18px] leading-[24px] font-secondary text-[#26293B]">
              Change your industry
            </p>
          </div>

          <button
            class="rounded-[5px] text-[#26293B] border-[#DACDBE] border bg-transparent px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
          >
            Book a call
          </button>
        </div>
        <div class="flex flex-col gap-[18px] pt-[18px] bg-[#FFF9F2] px-[25px]">
          <h1 class="text-[24px] leading-[30px] text-[#26293B]">
            {{
              selectedIndustry.charAt(0).toUpperCase() +
              selectedIndustry.slice(1)
            }}
          </h1>
          <div class="flex flex-row items-center justify-between gap-[22px]">
            <a
              href="#"
              v-scroll-to="'#market'"
              @click="setActiveLink('market')"
              :class="[
                activeLink == 'market'
                  ? ' border-b-[#ff957d]'
                  : 'border-transparent',
                'border-b-[4px] cursor-pointer text-[18px] leading-[24px] font-secondary pb-[15px]',
              ]"
            >
              Market
            </a>
            <a
              href="#"
              v-scroll-to="'#workforce'"
              @click="setActiveLink('workforce')"
              :class="[
                activeLink == 'workforce'
                  ? ' border-b-[#ff957d]'
                  : 'border-transparent',
                'border-b-[4px] cursor-pointer text-[18px] leading-[24px] font-secondary pb-[15px]',
              ]"
            >
              Workforce
            </a>
            <p
              v-scroll-to="'#taxes'"
              @click="setActiveLink('taxes')"
              :class="[
                activeLink == 'taxes'
                  ? ' border-b-[#ff957d]'
                  : 'border-transparent',
                'border-b-[4px] cursor-pointer text-[18px] leading-[24px] font-secondary pb-[15px]',
              ]"
            >
              Taxes
            </p>
            <p
              v-scroll-to="'#cost'"
              @click="setActiveLink('cost')"
              :class="[
                activeLink == 'cost'
                  ? ' border-b-[#ff957d]'
                  : 'border-transparent',
                'border-b-[4px] cursor-pointer text-[18px] leading-[24px] font-secondary pb-[15px]',
              ]"
            >
              Cost
            </p>
            <p
              v-scroll-to="'#investment'"
              @click="setActiveLink('investment')"
              :class="[
                activeLink == 'investment'
                  ? ' border-b-[#ff957d]'
                  : 'border-transparent',
                'border-b-[4px] cursor-pointer text-[18px] leading-[24px] font-secondary pb-[15px]',
              ]"
            >
              Investment
            </p>
          </div>
        </div>
        <div id="section-container" class="h-screen min-h-screen overflow-auto">
          <div id="market" class="bg-white px-[27px] pt-[61px] pb-[77px]">
            <div class="flex flex-col gap-[18px]">
              <h2
                class="text-[24px] leading-[30px] font-secondary text-[#26293b]"
              >
                Market
              </h2>
              <span class="text-[18px] text-[#26293B] leading-[24px]">
                London: A Global Leader in Software Solutions
              </span>
              <p class="text-[#26293B] text-[16px] leading-[20px]">
                The UK’s Software market is estimated to grow significantly is
                predicated to add up to an additional £625bn to the UK economy
                by 2035. London is home to lots of really nice companies,
                Europe’s the fastest growing scale ups as well as larger tech
                company’s R&D centres.
              </p>
            </div>
            <div class="flex flex-col gap-[25px] pt-[48px]">
              <h3 class="text-[18px] text-[#26293B] leading-[24px]">
                Market Sizes
              </h3>
              <div class="flex flex-row gap-[10px]">
                <p
                  class="cursor-pointer rounded-[18px] text-[#26293b] text-[14px] leading-[20px] px-[18px] py-[7px] border border-transparent bg-[#FF957D] transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent"
                >
                  Software
                </p>
                <p
                  class="cursor-pointer rounded-[18px] text-[#26293b] text-[14px] leading-[20px] px-[18px] py-[7px] border border-[#DDCDBC] bg-transparent transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent"
                >
                  Enterprise
                </p>
                <p
                  class="cursor-pointer rounded-[18px] text-[#26293b] text-[14px] leading-[20px] px-[18px] py-[7px] border border-[#DDCDBC] bg-transparent transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent"
                >
                  Cyber
                </p>
              </div>
              <div class="flex flex-row gap-[10px] justify-between">
                <div
                  class="flex flex-col justify-between gap-[14px] flex-[45%] px-[11px] py-[8px] rounded-[2.5px] bg-[#26293b]"
                >
                  <p
                    class="text-[14px] leading-[20px] font-secondary text-white"
                  >
                    United Kingdom
                  </p>
                  <h2 class="text-[42px] leading-[66px] text-white">£948m</h2>
                  <span
                    class="text-[14px] leading-[20px] font-secondary text-white"
                  >
                    Approx 16.6% of European market
                  </span>
                </div>
                <div
                  class="flex flex-col justify-between gap-[14px] flex-[45%] px-[11px] py-[8px] rounded-[2.5px] bg-[#DDCDBC]"
                >
                  <p
                    class="text-[14px] leading-[20px] font-secondary text-[#26293B]"
                  >
                    Europe
                  </p>
                  <h2 class="text-[42px] leading-[66px] text-[#26293B]">
                    £5.7b
                  </h2>
                  <span
                    class="text-[14px] leading-[20px] font-secondary text-[#26293B]"
                  >
                    Total European market
                  </span>
                </div>
              </div>
            </div>
            <div class="pt-[48px]">
              <h3 class="text-[18px] text-[#26293B] leading-[24px] pb-[22px]">
                World-class Connections
              </h3>
              <VueSlickCarousel
                class="connections-slider border-b border-b-[#DACEBE] pb-[41px]"
                v-bind="settings"
              >
                <div class="flex flex-col">
                  <div
                    class="flex items-center justify-center w-full h-[200px] bg-[#FFF9F2]"
                  >
                    <h2 class="text-[18px] text-[#26293B] leading-[24px]">
                      Image placeholder
                    </h2>
                  </div>
                  <div class="flex flex-col gap-[19px] pt-[59px]">
                    <span class="text-[18px] text-[#26293B] leading-[24px]">
                      The Open Data Institute
                    </span>
                    <p class="text-[#26293B] text-[16px] leading-[20px]">
                      The Open Data Institute is a non-profit private company
                      limited by guarantee, based in the United Kingdom. Founded
                      by Sir Tim Berners-Lee and Sir Nigel Shadbold in 2012, the
                      ODI’s mission is to connect, equip and inspire people
                      around the world to innovate with data.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div
                    class="flex items-center justify-center w-full h-[200px] bg-[#FF957D]"
                  >
                    <h2 class="text-[18px] text-[#26293B] leading-[24px]">
                      Image placeholder 2
                    </h2>
                  </div>
                  <div class="flex flex-col gap-[19px] pt-[59px]">
                    <span class="text-[18px] text-[#26293B] leading-[24px]">
                      The Open Data Institute 2
                    </span>
                    <p class="text-[#26293B] text-[16px] leading-[20px]">
                      The Open Data Institute 2 is a non-profit private company
                      limited by guarantee, based in the United Kingdom. Founded
                      by Sir Tim Berners-Lee and Sir Nigel Shadbold in 2012.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col">
                  <div
                    class="flex items-center justify-center w-full h-[200px] bg-[#26293B]"
                  >
                    <h2 class="text-[18px] text-white leading-[24px]">
                      Image placeholder 3
                    </h2>
                  </div>
                  <div class="flex flex-col gap-[19px] pt-[59px]">
                    <span class="text-[18px] text-[#26293B] leading-[24px]">
                      The Open Data Institute 3
                    </span>
                    <p class="text-[#26293B] text-[16px] leading-[20px]">
                      The Open Data Institute is a non-profit private company
                      limited by guarantee, based in the United Kingdom.
                    </p>
                  </div>
                </div>
              </VueSlickCarousel>

              <div class="py-[48px] flex flex-col gap-[19px]">
                <span class="text-[18px] text-[#26293B] leading-[24px]">
                  Business Districts
                </span>
                <p class="text-[#26293B] text-[16px] leading-[20px]">
                  Being located in the correct business district and having
                  access to networks, experts and specialist recruitment is
                  essential.
                </p>
              </div>
              <div
                class="flex flex-col gap-[76px] border-b border-b-[#DACEBE] pb-[28px]"
              >
                <img :src="require('@/assets/london.png')" alt="london" />

                <VueSlickCarousel class="business-slider" v-bind="settings">
                  <div class="flex flex-col">
                    <span class="text-[18px] text-[#26293B] leading-[24px]">
                      1. Shoreditch – Tech City
                    </span>
                    <p
                      class="text-[#26293B] text-[16px] leading-[20px] pt-[19px]"
                    >
                      East London Tech City is a technology cluster of high-tech
                      companies located in East London, England. It’s main area
                      lies broadly between St Luke’s and Hackney Road, with an
                      accelerator space for spinout companies at the Queen
                      Elizabeth Olympic Park.
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[18px] text-[#26293B] leading-[24px]">
                      2. Shoreditch – Tech City
                    </span>
                    <p
                      class="text-[#26293B] text-[16px] leading-[20px] pt-[19px]"
                    >
                      East London Tech City is a technology cluster of high-tech
                      companies located in East London, England. It’s main area
                      lies broadly between St Luke’s and Hackney Road, with an
                      accelerator space for spinout companies at the Queen
                      Elizabeth Olympic Park.
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[18px] text-[#26293B] leading-[24px]">
                      3. Shoreditch – Tech City
                    </span>
                    <p
                      class="text-[#26293B] text-[16px] leading-[20px] pt-[19px]"
                    >
                      East London Tech City is a technology cluster of high-tech
                      companies located in East London, England. It’s main area
                      lies broadly between St Luke’s and Hackney Road, with an
                      accelerator space for spinout companies at the Queen
                      Elizabeth Olympic Park.
                    </p>
                  </div>
                </VueSlickCarousel>
              </div>
              <div class="pt-[48px]">
                <div class="flex flex-col gap-[19px]">
                  <span class="text-[18px] text-[#26293B] leading-[24px]">
                    We Simplify your pathway to London
                  </span>
                  <p class="text-[#26293B] text-[16px] leading-[20px]">
                    Whether you are looking for; clients, research, build a
                    team, or to raise finance, we have your ABC’s.
                  </p>
                  <div class="flex flex-col gap-[15px] mt-[11px]">
                    <div class="flex items-center gap-[15px]">
                      <div
                        class="rounded-full text-[#26293B] text-[16px] leading-[20px] flex items-center justify-center w-[30px] h-[30px] bg-[#ff957d]"
                      >
                        A
                      </div>
                      <p class="text-[#26293B] text-[16px] leading-[20px]">
                        Actions you need to take
                      </p>
                    </div>
                    <div class="flex items-center gap-[15px]">
                      <div
                        class="rounded-full text-[#26293B] text-[16px] leading-[20px] flex items-center justify-center w-[30px] h-[30px] bg-[#ff957d]"
                      >
                        B
                      </div>
                      <p class="text-[#26293B] text-[16px] leading-[20px]">
                        Best Practice to help you avoid pitfalls
                      </p>
                    </div>
                    <div class="flex items-center gap-[15px]">
                      <div
                        class="rounded-full text-[#26293B] text-[16px] leading-[20px] flex items-center justify-center w-[30px] h-[30px] bg-[#ff957d]"
                      >
                        C
                      </div>
                      <p class="text-[#26293B] text-[16px] leading-[20px]">
                        Costs you will incur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="workforce"
            class="bg-[#CFEAC7] px-[27px] py-[61px] pb-[77px]"
          >
            <div
              class="flex flex-col gap-[18px] pb-[49px] border-b border-[#27293A]"
            >
              <h2
                class="text-[24px] leading-[30px] font-secondary text-[#26293b]"
              >
                Workforce
              </h2>
              <span class="text-[18px] text-[#26293B] leading-[24px]">
                London Software Workforce
              </span>
              <p class="text-[#26293B] text-[16px] leading-[20px]">
                London’s software workforce is extremely active, with
                experienced developers at the higher end and graduates from
                multiple world class Universities joining the labour market each
                year. Importantly, skills across the workforce cover all aspects
                of software development from front end to multiple aspects of AI
                and Quantum.
              </p>
            </div>
            <div
              class="flex flex-col gap-[18px] py-[49px] border-b border-[#27293A]"
            >
              <h4 class="text-[18px] text-[#26293B] leading-[24px]">
                European Software Cities
              </h4>
              <div class="flex flex-col mt-[10px]">
                <img :src="require('@/assets/europe.png')" alt="europe" />
                <div
                  class="bg-[#26293B] text-white text-[16px] leading-[22px] font-secondary px-[15px] py-[9px] rounded-[2.5px]"
                >
                  European Workforce totals
                </div>
              </div>
              <div class="flex flex-col gap-[10px]">
                <div
                  class="flex justify-between items-center bg-white text-white text-[16px] leading-[22px] font-secondary px-[15px] py-[9px] rounded-[2.5px]"
                >
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    1. Paris
                  </p>
                  <span
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    13432
                  </span>
                </div>
                <div
                  class="flex justify-between items-center bg-white text-white text-[16px] leading-[22px] font-secondary px-[15px] py-[9px] rounded-[2.5px]"
                >
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    2. Berlin
                  </p>
                  <span
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    12721
                  </span>
                </div>
                <div
                  class="flex justify-between items-center bg-white text-white text-[16px] leading-[22px] font-secondary px-[15px] py-[9px] rounded-[2.5px]"
                >
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    3. Amsterdam
                  </p>
                  <span
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    11080
                  </span>
                </div>
                <div
                  class="flex justify-between items-center bg-white text-white text-[16px] leading-[22px] font-secondary px-[15px] py-[9px] rounded-[2.5px]"
                >
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    4. Munich
                  </p>
                  <span
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    10046
                  </span>
                </div>
                <div
                  class="flex justify-between items-center bg-white text-white text-[16px] leading-[22px] font-secondary px-[15px] py-[9px] rounded-[2.5px]"
                >
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    5. Barcelona
                  </p>
                  <span
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    9985
                  </span>
                </div>
                <div
                  class="flex justify-between items-center bg-white text-white text-[16px] leading-[22px] font-secondary px-[15px] py-[9px] rounded-[2.5px]"
                >
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    6. Lisbon
                  </p>
                  <span
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    6824
                  </span>
                </div>
                <p class="text-[14px] leading-[18px] text-[#26293b]">
                  Source: Data is sourced from industry reports; more details
                  are in the downloadable report.
                </p>
              </div>
            </div>
            <div class="flex flex-col gap-[18px] pt-[49px]">
              <h4 class="text-[18px] text-[#26293B] leading-[24px]">
                Salaries in London
              </h4>
              <div class="flex flex-row gap-[10px] justify-between">
                <div
                  class="flex flex-col justify-between gap-[14px] flex-[45%] px-[11px] py-[8px] rounded-[2.5px] bg-white"
                >
                  <p
                    class="text-[14px] leading-[20px] font-secondary text-[#26293B]"
                  >
                    Data Scientist
                  </p>
                  <h2 class="text-[42px] leading-[66px] text-[#26293B]">
                    £68,452
                  </h2>
                  <span
                    class="text-[14px] leading-[20px] font-secondary text-[#26293B]"
                  >
                    Av. Salary: 5-10 years experience
                  </span>
                </div>
                <div
                  class="flex flex-col justify-between gap-[14px] flex-[45%] px-[11px] py-[8px] rounded-[2.5px] bg-[#26293b]"
                >
                  <p
                    class="text-[14px] leading-[20px] font-secondary text-white"
                  >
                    Back End Developer
                  </p>
                  <h2 class="text-[42px] leading-[66px] text-white">£56,263</h2>
                  <span
                    class="text-[14px] leading-[20px] font-secondary text-white"
                  >
                    Av. Salary: 5-10 years experience
                  </span>
                </div>
              </div>
              <p class="text-[14px] leading-[18px] text-[#26293b]">
                Source: Salaries are sourced from current recruitment data for
                mid-tier positions. More data available in the downloadable
                report.
              </p>
            </div>
          </div>
          <div id="taxes" class="bg-[#26293B] px-[27px] py-[61px]">
            <div
              class="flex flex-col gap-[18px] pb-[49px] border-b border-[#64697C]"
            >
              <h2 class="text-[24px] leading-[30px] font-secondary text-white">
                Taxes
              </h2>
              <span class="text-[18px] text-white leading-[24px]">
                What are UK tax liabilities?
              </span>
              <p class="text-white text-[16px] leading-[20px]">
                The UK has the lowest corporation tax in the G20 and the tax
                information below is based upon the standard rate for
                corporation tax and repatriation of dividends as well as an
                estimation for employee liability.
              </p>
            </div>
            <div
              class="flex flex-col gap-[25px] py-[48px] border-b border-[#64697C]"
            >
              <h3 class="text-[18px] text-white leading-[24px]">
                London: A Global Leader in Software Solutions
              </h3>
              <div class="flex flex-row gap-[10px] overflow-y-auto pb-[10px]">
                <p
                  class="cursor-pointer rounded-[18px] text-[#26293b] text-[14px] leading-[20px] px-[18px] py-[7px] border border-transparent bg-[#FF957D] transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent"
                >
                  France
                </p>
                <p
                  class="cursor-pointer rounded-[18px] text-white text-[14px] leading-[20px] px-[18px] py-[7px] border border-[#64697C] bg-transparent transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent hover:text-[#26293b]"
                >
                  Germany
                </p>
                <p
                  class="cursor-pointer rounded-[18px] text-white text-[14px] leading-[20px] px-[18px] py-[7px] border border-[#64697C] bg-transparent transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent hover:text-[#26293b]"
                >
                  Italy
                </p>
                <p
                  class="cursor-pointer rounded-[18px] text-white text-[14px] leading-[20px] px-[18px] py-[7px] border border-[#64697C] bg-transparent transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent hover:text-[#26293b]"
                >
                  Netherlands
                </p>
                <p
                  class="cursor-pointer rounded-[18px] text-white text-[14px] leading-[20px] px-[18px] py-[7px] border border-[#64697C] bg-transparent transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent hover:text-[#26293b]"
                >
                  Spain
                </p>
                <p
                  class="cursor-pointer rounded-[18px] text-white text-[14px] leading-[20px] px-[18px] py-[7px] border border-[#64697C] bg-transparent transition-colors duration-200 ease-in-out hover:bg-[#FF957D] hover:border-transparent hover:text-[#26293b]"
                >
                  Switzerland
                </p>
              </div>
              <div class="flex flex-col gap-[28px] justify-between">
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-white"
                  >
                    Corporation Tax
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#64697C] border border-[#64697C] rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        United Kingdom
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        19%
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[123px] bg-[#fce083]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-transparent border border-[#64697C] rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        France
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        33%
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[161px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-white"
                  >
                    Employee Liability
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#64697C] border border-[#64697C] rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        United Kingdom
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        19%
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[123px] bg-[#fce083]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-transparent border border-[#64697C] rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        France
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        45%
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[161px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-white"
                  >
                    Employee Liability
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#64697C] border border-[#64697C] rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        United Kingdom
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        0%
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[88px] bg-[#fce083]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-transparent border border-[#64697C] rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        France
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-white"
                      >
                        30%
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[202px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <p class="text-[14px] leading-[18px] text-white">
                Source: Tax data is sourced from national government agencies
              </p>
            </div>
            <div
              class="flex flex-col gap-[25px] py-[48px] border-b border-[#64697C]"
            >
              <div class="px-[12px] rounded-[2.5px] border border-[#64697C]">
                <p
                  class="text-[16px] leading-[22px] font-secondary text-white py-[20px] border-b border-b-[#64697c]"
                >
                  Tax Definitions
                </p>
                <div
                  v-for="(tab, index) in taxTabs"
                  :key="index"
                  class="py-[20px] border-b border-b-[#64697c] last:border-b-0"
                >
                 <div class="flex flex-row justify-between cursor-pointer" @click="toggleTab(index)">
                   <p
                    class="text-[16px] leading-[22px] font-secondary text-white"
                  >
                    {{tab.title}}
                  </p>
                  <div class="relative flex items-center justify-center">
                    <div class="w-[20px] h-[3px] bg-white">

                    </div>
                    <div :class="[tab.isOpen ? 'rotate-0' : 'rotate-[90deg]', 'transition-transform ease-out duration-500 trasnform w-[20px] h-[3px] bg-white absolute top-[calc(50% - 1px)]']">

                    </div>
                  </div>
                 </div>
                  <Transition name="slide">
                    <div v-if="tab.isOpen">
                      <p class="text-white text-[16px] leading-[22px] w-[303px] pt-[20px]">{{ tab.description }}</p>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-[18px] pt-[49px]">
              <h4 class="text-[18px] text-white leading-[24px]">
                Ease of doing business
              </h4>
              <p class="text-[16px] leading-[20px] text-white">
                The UK has the lowest corporation tax in the G20 and the tax
                information below is a based upon the standard rate for
                corporation tax and repatriation of of dividends as well as an
                estimation rate for employee liability.
              </p>
              <div class="flex flex-row gap-[10px] justify-between mt-[16px]">
                <div
                  class="flex flex-col justify-between gap-[14px] flex-[45%] px-[11px] py-[8px] rounded-[2.5px] bg-white"
                >
                  <p
                    class="text-[14px] leading-[20px] font-secondary text-[#26293B]"
                  >
                    Ranking for ease of doing Business
                  </p>
                  <h2 class="text-[42px] leading-[66px] text-[#26293B]">
                    No. 2
                  </h2>
                  <span
                    class="text-[14px] leading-[20px] font-secondary text-[#26293B]"
                  >
                    EU
                  </span>
                </div>
                <div
                  class="flex flex-col justify-between gap-[14px] flex-[45%] px-[11px] py-[8px] rounded-[2.5px] bg-[#DDCDBC]"
                >
                  <p
                    class="text-[14px] leading-[20px] font-secondary text-[#26293B]"
                  >
                    Ranking for ease of doing Business
                  </p>
                  <h2 class="text-[42px] leading-[66px] text-[#26293B]">
                    No. 7
                  </h2>
                  <span
                    class="text-[14px] leading-[20px] font-secondary text-[#26293B]"
                  >
                    Worldwide
                  </span>
                </div>
              </div>
              <p class="text-[14px] leading-[18px] text-white">
                Source: Salaries are sourced from current recruitment data for
                mid-tier positions. More data available in the downloadable
                report.
              </p>
            </div>
          </div>
          <div id="cost" class="bg-[#FF957D] px-[27px] py-[61px] pb-[77px]">
            <div
              class="flex flex-col gap-[18px] pb-[49px] border-b border-[#27293A]"
            >
              <h2
                class="text-[24px] leading-[30px] font-secondary text-[#26293b]"
              >
                Cost of Operations
              </h2>
              <span class="text-[18px] text-[#26293B] leading-[24px]">
                Curated for you
              </span>
              <p class="text-[#26293B] text-[16px] leading-[20px]">
                We have calculated a series of [Software] operational cost
                examples, based upon company size and levels of turnover.
              </p>
              <p class="text-[#26293B] text-[16px] leading-[20px]">
                This example is of an [insert industry] company with 30
                employees and a turnover of £3m. Calculations include all
                aspects of tax, salaries and employee costs.
              </p>
            </div>
            <div class="flex flex-col gap-[29px] py-[48px]">
              <h2
                class="text-[18px] leading-[24px] font-secondary text-[#26293b]"
              >
                Pre/Post Tax Profit
              </h2>
              <div
                class="bg-white rounded-[2.5px] px-[11px] py-[19px] flex flex-col gap-[18px]"
              >
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    United Kingdom
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Pre-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1.62m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[123px] bg-[#6C8C84]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Post-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1.31m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[161px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    Italy
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Pre-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1.48m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[106px] bg-[#6C8C84]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Post-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1.12m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[181px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    Sweeden
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Pre-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1.26m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[42px] bg-[#6C8C84]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Post-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[121px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    France
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Pre-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1.15m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[193px] bg-[#6C8C84]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Post-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £0.84m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[90px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    Netherlands
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Pre-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[320px] bg-[#6C8C84]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Post-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £0.78m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[121px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    Germany
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Pre-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £1.10m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[111px] bg-[#6C8C84]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Post-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £0.77m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[211px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[16px]">
                  <p
                    class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                  >
                    Switzerland
                  </p>
                  <div class="flex flex-col gap-[10px]">
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Pre-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £0.85m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[50px] bg-[#6C8C84]"
                      ></div>
                    </div>
                    <div
                      class="flex justify-between items-center relative bg-[#FFF9F2] border border-transparent rounded-tr-[2.5px] rounded-tl-[2.5px]"
                    >
                      <p
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        Post-Tax Profit
                      </p>
                      <span
                        class="px-[13px] py-[11px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                      >
                        £0.72m
                      </span>
                      <div
                        class="absolute bottom-0 h-[5px] w-[112px] bg-[#FF957D]"
                      ></div>
                    </div>
                  </div>
                </div>
                <p class="text-[14px] leading-[18px] text-[#26293b]">
                  Source: Crunchbase (3yr investment activity)
                </p>
              </div>
            </div>
            <div class="">
              <div
                class="w-full h-[250px] flex justify-between bg-[#CFEAC7] flex-col px-[13px] pt-[9px] pb-[14px]"
              >
                <p class="w-[60%] text-[24px] leading-[30px] text-[#26293b]">
                  Explore your cost of operations today
                </p>
                <button
                  class="rounded-[5px] bg-[#26293B] text-white px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
                >
                  Begin
                </button>
              </div>
            </div>
          </div>
          <div
            id="investment"
            class="bg-[#FFF9F2] px-[27px] py-[61px] pb-[300px]"
          >
            <div class="flex flex-col gap-[18px] pb-[49px]">
              <h2
                class="text-[24px] leading-[30px] font-secondary text-[#26293b]"
              >
                Investment
              </h2>
              <span class="text-[18px] text-[#26293B] leading-[24px]">
                Software Investment
              </span>
              <p class="text-[#26293B] text-[16px] leading-[20px]">
                London has a dominant role within the global investment
                landscape due to it’s mature investment eco-system with
                investors benefiting from generous tax incentives to back UK
                companies.
              </p>
            </div>
            <div
              class="flex flex-col gap-[18px] py-[27px] px-[12px] bg-white rounded-[2.5px]"
            >
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                >
                  United Kingdom
                </p>
                <div
                  class="flex flex-col gap-[11px] bg-[#FFF9F2] rounded-[2.5px] py-[10px] px-[3px] justify-between items-end"
                >
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    £6.5b
                  </p>
                  <div class="relative w-full h-[2px] bg-[#DACEBE]">
                    <div
                      class="absolute top-[-4px] left-0 bg-[#FF957D] w-[121px] h-[5px]"
                    ></div>
                  </div>
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    Approx. 48.3% of Euro Market
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                >
                  France
                </p>
                <div
                  class="flex flex-col gap-[11px] bg-[#FFF9F2] rounded-[2.5px] py-[10px] px-[3px] justify-between items-end"
                >
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    £2.3b
                  </p>
                  <div class="relative w-full h-[2px] bg-[#DACEBE]">
                    <div
                      class="absolute top-[-4px] left-0 bg-[#FCE083] w-[121px] h-[5px]"
                    ></div>
                  </div>
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    Approx. 16.8% of Euro Market
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                >
                  Germany
                </p>
                <div
                  class="flex flex-col gap-[11px] bg-[#FFF9F2] rounded-[2.5px] py-[10px] px-[3px] justify-between items-end"
                >
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    £1.3b
                  </p>
                  <div class="relative w-full h-[2px] bg-[#DACEBE]">
                    <div
                      class="absolute top-[-4px] left-0 bg-[#FF957D] w-[91px] h-[5px]"
                    ></div>
                  </div>
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    Approx. 9.7% of Euro Market
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                >
                  Switzerland
                </p>
                <div
                  class="flex flex-col gap-[11px] bg-[#FFF9F2] rounded-[2.5px] py-[10px] px-[3px] justify-between items-end"
                >
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    £540m
                  </p>
                  <div class="relative w-full h-[2px] bg-[#DACEBE]">
                    <div
                      class="absolute top-[-4px] left-0 bg-[#FF957D] w-[68px] h-[5px]"
                    ></div>
                  </div>
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    Approx. 4% of Euro Market
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                >
                  Spain
                </p>
                <div
                  class="flex flex-col gap-[11px] bg-[#FFF9F2] rounded-[2.5px] py-[10px] px-[3px] justify-between items-end"
                >
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    £240m
                  </p>
                  <div class="relative w-full h-[2px] bg-[#DACEBE]">
                    <div
                      class="absolute top-[-4px] left-0 bg-[#FF957D] w-[40px] h-[5px]"
                    ></div>
                  </div>
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    Approx. 1.8% of Euro Market
                  </p>
                </div>
              </div>
              <div class="flex flex-col gap-[20px]">
                <p
                  class="text-[16px] leading-[22px] font-secondary text-[#26293b]"
                >
                  Italy
                </p>
                <div
                  class="flex flex-col gap-[11px] bg-[#FFF9F2] rounded-[2.5px] py-[10px] px-[3px] justify-between items-end"
                >
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    £117m
                  </p>
                  <div class="relative w-full h-[2px] bg-[#DACEBE]">
                    <div
                      class="absolute top-[-4px] left-0 bg-[#FF957D] w-[25px] h-[5px]"
                    ></div>
                  </div>
                  <p
                    class="mr-[12px] text-[14px] leading-[18px] font-secondary text-[#26293b]"
                  >
                    Approx. 0.9% of Euro Market
                  </p>
                </div>
              </div>
              <div class="flex flex-row items-center justify-between mt-[30px]">
                <p
                  class="text-[16px] leading-[20px] font-secondary text-[#26293b]"
                >
                  Total European Investment:
                </p>
                <span
                  class="text-[16px] leading-[20px] font-secondary text-[#26293b]"
                >
                  £13.6b
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="[
          activeStep == 4 && isOpen
            ? 'right-0 opacity-1'
            : 'right-[-460px] opacity-0',
          'top-0 overflow-hidden h-screen max-w-[458px] w-[458px] bg-[#26293B] absolute transition-all duration-200 ease-out delay-300',
        ]"
      >
        <div
          class="flex justify-between items-center pl-[20px] px-[5px] py-[5px]"
        >
          <div
            :class="[
              chatStep == 8
                ? 'bottom-[-100px] opacity-0'
                : 'bottom-0 opacity-1',
              'transition-all ease-in-out duration-200 z-[9999] absolute left-0 w-full bg-white flex flex-row gap-[10px] justify-between items-center py-[17px] pr-[16px] pl-[20px]',
            ]"
          >
            <div
              :style="{ width: Math.round(chatStep * 14.2857143) + '%' }"
              class="h-full bg-[#FF957D] absolute left-0 top-0 z-[9999] transition-all ease-in-out duration-200"
            ></div>
            <p
              class="text-[18px] font-secondary leading-[24px] text-[#26293b] z-[10000]"
            >
              {{ Math.round(chatStep * 14.2857143) }}%
            </p>
            <div class="flex gap-[10px] flex-row z-[10000]">
              <button
                @click="
                  chatStep == 1 ? setActiveStep(3) : setChatStep(chatStep - 1)
                "
                class="rounded-[5px] text-white bg-[#26293B] px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
              >
                Back
              </button>
              <button
                @click="setChatStep(chatStep + 1)"
                class="rounded-[5px] text-white bg-[#26293B] px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
              >
                {{
                  Math.round(chatStep * 14.2857143) < 100 ? "Next" : "Finish"
                }}
              </button>
            </div>
          </div>
          <div
            :class="[
              chatStep == 8 ? 'opacity-0' : 'opacity-1',
              'flex items-center gap-[20px] cursor-pointer',
            ]"
            @click="setActiveStep(2)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.948"
              height="17.067"
              viewBox="0 0 9.948 17.067"
            >
              <g
                id="Group_74"
                data-name="Group 74"
                transform="translate(-734.01 1401) rotate(-90)"
              >
                <line
                  id="Line_2"
                  data-name="Line 2"
                  x1="7.119"
                  y1="7.119"
                  transform="translate(1399.586 742.543) rotate(180)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="square"
                  stroke-width="2"
                />
                <line
                  id="Line_3"
                  data-name="Line 3"
                  y1="7.119"
                  x2="7.119"
                  transform="translate(1392.467 742.543) rotate(180)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="square"
                  stroke-width="2"
                />
              </g>
            </svg>

            <p class="text-[18px] leading-[24px] font-secondary text-white">
              Industry:
              {{
                selectedIndustry.charAt(0).toUpperCase() +
                selectedIndustry.slice(1)
              }}
            </p>
          </div>

          <button
            class="rounded-[5px] text-white border-[#64697C] border bg-transparent px-[37px] py-[8px] text-[18px] leading-[24px] font-secondary"
          >
            Book a call
          </button>
        </div>
        <div
          :class="[
            chatStep == 8 ? 'bg-[#26293b]' : 'bg-[#FFF9F2]',
            'h-screen overflow-auto',
          ]"
        >
          <div
            v-if="chatStep == 1"
            class="flex flex-col gap-[76px] py-[80px] px-[30px]"
          >
            <div class="flex flex-row gap-[13px]">
              <img
                :src="require('@/assets/avatar.jpg')"
                class="w-[38px] h-[38px] rounded-full"
                alt="persona"
              />
              <div class="flex flex-col gap-[10px]">
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  Let’s build your tailored report
                </div>
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  Firstly, what's your name?
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[5px]">
                <label
                  class="text-[16px] font-secondary leading-[20px] text-[#26293b]"
                  >Name</label
                >
                <input
                  class="bg-white text-[16px] leading-[20px] text-[#26293b] px-[13px] py-[10px] border border-[#DACEBE] rounded-[2.5px] focus:outline-[#FF957D]"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-[5px]">
                <label
                  class="text-[16px] font-secondary leading-[20px] text-[#26293b]"
                  >Surname</label
                >
                <input
                  class="bg-white text-[16px] leading-[20px] text-[#26293b] px-[13px] py-[10px] border border-[#DACEBE] rounded-[2.5px] focus:outline-[#FF957D]"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div
            v-if="chatStep == 2"
            class="flex flex-col gap-[76px] py-[80px] px-[30px]"
          >
            <div class="flex flex-row gap-[13px]">
              <img
                :src="require('@/assets/avatar.jpg')"
                class="w-[38px] h-[38px] rounded-full"
                alt="persona"
              />
              <div class="flex flex-col gap-[10px]">
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  Hi Simon
                </div>
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  Where are you based?
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-[16px]">
              <div class="flex flex-col gap-[5px]">
                <label
                  class="text-[16px] font-secondary leading-[20px] text-[#26293b]"
                  >Country</label
                >
                <input
                  class="bg-white text-[16px] leading-[20px] text-[#26293b] px-[13px] py-[10px] border border-[#DACEBE] rounded-[2.5px] focus:outline-[#FF957D]"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div
            v-if="chatStep == 3"
            class="flex flex-col gap-[76px] py-[80px] px-[30px]"
          >
            <div class="flex flex-row gap-[13px]">
              <img
                :src="require('@/assets/avatar.jpg')"
                class="w-[38px] h-[38px] rounded-full"
                alt="persona"
              />
              <div class="flex flex-col gap-[30px]">
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  Would you like to add a ‘Cost of Operations’ example to your
                  report?
                </div>
                <div class="flex flex-col gap-[10px]">
                  <div
                    @click="setIsCost(true)"
                    :class="[
                      isCost ? 'bg-[#DDCDBC]' : 'bg-white',
                      'border cursor-pointer flex flex-row gap-[15px] px-[10px] w-[93px] py-[10px] items-center rounded-[2.5px] border-[#DDCDBC]  hover:bg-[#DDCDBC] group transition-colors duration-200 ease-in-out',
                    ]"
                  >
                    <div
                      :class="[
                        isCost ? 'bg-white' : 'bg-[#DDCDBC]',
                        'w-[20px] h-[20px] rounded-full group-hover:bg-white',
                      ]"
                    ></div>
                    <label
                      class="text-[18px] font-secondary leading-[24px] text-[#26293b]"
                      >Yes</label
                    >
                  </div>
                  <div
                    @click="setIsCost(false)"
                    :class="[
                      isCost === false ? 'bg-[#DDCDBC]' : 'bg-white',
                      'border cursor-pointer flex flex-row gap-[15px] px-[10px] w-[93px] py-[10px] items-center rounded-[2.5px] border-[#DDCDBC]  hover:bg-[#DDCDBC] group transition-colors duration-200 ease-in-out',
                    ]"
                  >
                    <div
                      :class="[
                        isCost === false ? 'bg-white' : 'bg-[#DDCDBC]',
                        'w-[20px] h-[20px] rounded-full group-hover:bg-white',
                      ]"
                    ></div>
                    <label
                      class="text-[18px] font-secondary leading-[24px] text-[#26293b]"
                      >No</label
                    >
                  </div>
                </div>
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  Great, we just need to understand more about your requirements
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="chatStep == 4"
            class="flex flex-col gap-[76px] py-[80px] px-[30px]"
          >
            <div class="flex flex-row gap-[13px]">
              <img
                :src="require('@/assets/avatar.jpg')"
                class="w-[38px] h-[38px] rounded-full"
                alt="persona"
              />
              <div class="flex flex-col gap-[30px]">
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  What requirements will help you to achieve your ambition? You
                  can pick more than one.
                </div>
                <div class="flex flex-col gap-[10px]">
                  <div
                    @click="setRequirements('set-up')"
                    :class="[
                      requirements == 'set-up' ? 'bg-[#DDCDBC]' : 'bg-white',
                      'border cursor-pointer flex flex-row gap-[15px] px-[10px] py-[10px] items-center rounded-[2.5px] border-[#DDCDBC] hover:bg-[#DDCDBC] group transition-colors duration-200 ease-in-out',
                    ]"
                  >
                    <div
                      :class="[
                        requirements == 'set-up' ? 'bg-white' : 'bg-[#DDCDBC]',
                        'w-[20px] h-[20px] rounded-full group-hover:bg-white',
                      ]"
                    ></div>
                    <label
                      class="text-[18px] font-secondary leading-[24px] text-[#26293b]"
                      >Company Set-up</label
                    >
                  </div>
                  <div
                    @click="setRequirements('legal')"
                    :class="[
                      requirements == 'legal' ? 'bg-[#DDCDBC]' : 'bg-white',
                      'border cursor-pointer flex flex-row gap-[15px] px-[10px] py-[10px] items-center rounded-[2.5px] border-[#DDCDBC] hover:bg-[#DDCDBC] group transition-colors duration-200 ease-in-out',
                    ]"
                  >
                    <div
                      :class="[
                        requirements == 'legal' ? 'bg-white' : 'bg-[#DDCDBC]',
                        'w-[20px] h-[20px] rounded-full group-hover:bg-white',
                      ]"
                    ></div>
                    <label
                      class="text-[18px] font-secondary leading-[24px] text-[#26293b]"
                      >Legal and IP</label
                    >
                  </div>
                  <div
                    @click="setRequirements('visas')"
                    :class="[
                      requirements == 'visas' ? 'bg-[#DDCDBC]' : 'bg-white',
                      'border cursor-pointer flex flex-row gap-[15px] px-[10px] py-[10px] items-center rounded-[2.5px] border-[#DDCDBC] hover:bg-[#DDCDBC] group transition-colors duration-200 ease-in-out',
                    ]"
                  >
                    <div
                      :class="[
                        requirements == 'visas' ? 'bg-white' : 'bg-[#DDCDBC]',
                        'w-[20px] h-[20px] rounded-full group-hover:bg-white',
                      ]"
                    ></div>
                    <label
                      class="text-[18px] font-secondary leading-[24px] text-[#26293b]"
                      >Visas</label
                    >
                  </div>
                  <div
                    @click="setRequirements('investment')"
                    :class="[
                      requirements == 'investment'
                        ? 'bg-[#DDCDBC]'
                        : 'bg-white',
                      'border cursor-pointer flex flex-row gap-[15px] px-[10px] py-[10px] items-center rounded-[2.5px] border-[#DDCDBC] hover:bg-[#DDCDBC] group transition-colors duration-200 ease-in-out',
                    ]"
                  >
                    <div
                      :class="[
                        requirements == 'investment'
                          ? 'bg-white'
                          : 'bg-[#DDCDBC]',
                        'w-[20px] h-[20px] rounded-full group-hover:bg-white',
                      ]"
                    ></div>
                    <label
                      class="text-[18px] font-secondary leading-[24px] text-[#26293b]"
                      >Raising Investment</label
                    >
                  </div>
                  <div
                    @click="setRequirements('recruitment')"
                    :class="[
                      requirements == 'recruitment'
                        ? 'bg-[#DDCDBC]'
                        : 'bg-white',
                      'border cursor-pointer flex flex-row gap-[15px] px-[10px] py-[10px] items-center rounded-[2.5px] border-[#DDCDBC] hover:bg-[#DDCDBC] group transition-colors duration-200 ease-in-out',
                    ]"
                  >
                    <div
                      :class="[
                        requirements == 'recruitment'
                          ? 'bg-white'
                          : 'bg-[#DDCDBC]',
                        'w-[20px] h-[20px] rounded-full group-hover:bg-white',
                      ]"
                    ></div>
                    <label
                      class="text-[18px] font-secondary leading-[24px] text-[#26293b]"
                      >Recruitment</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="chatStep == 5"
            class="flex flex-col gap-[76px] py-[80px] px-[30px]"
          >
            <div class="flex flex-row gap-[13px]">
              <img
                :src="require('@/assets/avatar.jpg')"
                class="w-[38px] h-[38px] rounded-full"
                alt="persona"
              />
              <div class="flex flex-col">
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  What’s the name of your company?
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-[38px]">
              <div class="flex flex-col gap-[5px]">
                <label
                  class="text-[16px] font-secondary leading-[20px] text-[#26293b]"
                  >Company name</label
                >
                <input
                  class="bg-white text-[16px] leading-[20px] text-[#26293b] px-[13px] py-[10px] border border-[#DACEBE] rounded-[2.5px] focus:outline-[#FF957D]"
                  type="text"
                />
              </div>
              <a
                @click="setChatStep(chatStep + 1)"
                class="cursor-pointer text-[16px] font-secondary leading-[20px] text-[#26293b] underline"
                >Skip</a
              >
            </div>
          </div>
          <div
            v-if="chatStep == 6"
            class="flex flex-col gap-[76px] py-[80px] px-[30px]"
          >
            <div class="flex flex-row gap-[13px]">
              <img
                :src="require('@/assets/avatar.jpg')"
                class="w-[38px] h-[38px] rounded-full"
                alt="persona"
              />
              <div class="flex flex-col">
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  ...and your position?
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-[38px]">
              <div class="flex flex-col gap-[5px]">
                <label
                  class="text-[16px] font-secondary leading-[20px] text-[#26293b]"
                  >Position</label
                >
                <input
                  class="bg-white text-[16px] leading-[20px] text-[#26293b] px-[13px] py-[10px] border border-[#DACEBE] rounded-[2.5px] focus:outline-[#FF957D]"
                  type="text"
                />
              </div>
              <a
                @click="setChatStep(chatStep + 1)"
                class="cursor-pointer text-[16px] font-secondary leading-[20px] text-[#26293b] underline"
                >Skip</a
              >
            </div>
          </div>
          <div
            v-if="chatStep == 7"
            class="flex flex-col gap-[76px] py-[80px] px-[30px]"
          >
            <div class="flex flex-row gap-[13px]">
              <img
                :src="require('@/assets/avatar.jpg')"
                class="w-[38px] h-[38px] rounded-full"
                alt="persona"
              />
              <div class="flex flex-col">
                <div
                  class="text-[18px] font-secondary leading-[24px] text-[#26293b] rounded-[18px] px-[19px] pt-[4px] pb-[7px] bg-[#CFEAC7]"
                >
                  Great, and finally what is your email address so that we can
                  send you the report?
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-[38px]">
              <div class="flex flex-col gap-[5px]">
                <label
                  class="text-[16px] font-secondary leading-[20px] text-[#26293b]"
                  >Email address</label
                >
                <input
                  class="bg-white text-[16px] leading-[20px] text-[#26293b] px-[13px] py-[10px] border border-[#DACEBE] rounded-[2.5px] focus:outline-[#FF957D]"
                  type="text"
                />
              </div>
              <a
                @click="setChatStep(chatStep + 1)"
                class="cursor-pointer text-[16px] font-secondary leading-[20px] text-[#26293b] underline"
                >Skip</a
              >
            </div>
          </div>
          <div
            v-if="chatStep == 8"
            class="flex flex-col gap-[62px] py-[64px] px-[47px]"
          >
            <h2 class="text-white text-[56px] leading-[66px]">
              Thank you, a copy of the report has been sent to your inbox.
            </h2>
            <p class="text-[16px] leading-[20px] font-secondary text-white">
              Please check your emails
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "App",
  data() {
    return {
      isOpen: true,
      activeStep: 3,
      chatStep: 1,
      selectedIndustry: "",
      requirements: "",
      isCost: null,
      activeLink: "market",
      settings: {
        arrows: false,
        dots: true,
        autoplay: true,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
      },
      taxTabs: [
        {
          title: "Corporation Tax",
          description:
            "The UK has the lowest corporation tax in the G20 and the tax information below is based upon the standard rate for corporation tax and repatriation of dividends as well as an estimation for employee liability.",
          isOpen: false,
        },
        {
          title: "Employee Tax",
          description:
            "The UK has the lowest corporation tax in the G20 and the tax information below is based upon the standard rate for corporation tax and repatriation of dividends as well as an estimation for employee liability.",
          isOpen: false,
        },
        {
          title: "Dividend Repatriation",
          description:
            "The UK has the lowest corporation tax in the G20 and the tax information below is based upon the standard rate for corporation tax and repatriation of dividends as well as an estimation for employee liability.",
          isOpen: false,
        },
      ],
    };
  },
  components: { VueSlickCarousel },

  methods: {
    setSelectedIndustry(industry) {
      this.selectedIndustry = industry;
    },
    toggleWidget() {
      this.isOpen = !this.isOpen;
    },
    setActiveStep(step) {
      this.activeStep = step;
    },
    setChatStep(step) {
      this.chatStep = step;
    },
    setIsCost(value) {
      this.isCost = value;
    },
    setRequirements(value) {
      this.requirements = value;
    },
    scrollToSection(sectionRefName) {
      const section = this.$refs[sectionRefName];
      section.scrollIntoView({ behavior: "smooth" });
    },
    setActiveLink(link) {
      this.activeLink = link;
    },
    toggleTab(index) {
      this.taxTabs[index].isOpen = !this.taxTabs[index].isOpen;
    },
  },
};
</script>

<style>
</style>
