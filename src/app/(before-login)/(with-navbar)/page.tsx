"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useIsMobile,
  useIsPC,
  useIsTablet,
} from "@/lib/hooks/useCheckViewport";
import ROUTE from "@/lib/constants/route";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import header from "../../../../public/landingPage/header.png";
import point1 from "../../../../public/landingPage/point1.png";
import point2 from "../../../../public/landingPage/point2.png";
import landing_dashboard from "../../../../public/landingPage/landing_dashboard.png";
import landing_invite from "../../../../public/landingPage/landing_invite.png";
import landing_members from "../../../../public/landingPage/landing_members.png";
import instagram from "../../../../public/landingPage/Instagram.svg";
import facebook from "../../../../public/landingPage/facebook.svg";
import mail from "../../../../public/landingPage/mail.svg";
import Button from "@/components/common/button/Button";

export default function Home() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isPC = useIsPC();

  const [isRedirecting, setIsRedirecting] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.replace(ROUTE.MYDASHBOARD);
    } else {
      setIsRedirecting(false);
    }
  }, []);

  if (isRedirecting) return;

  const pointStyle = twMerge(
    clsx({
      "bg-gray-900 rounded-[8px]": true,
      "w-[343px] h-[686px] mt-[59px]": isMobile,
      "w-[664px] h-[972px] mt-[90px]": isTablet,
      "w-[1200px] h-[600px] mt-[90px]": isPC,
    })
  );
  const settingCommon1 = `flex justify-center items-center bg-gray-700 rounded-tl-[8px] rounded-tr-[8px] ${isMobile ? "w-[343px] h-[236px]" : "w-[378px] h-[260px]"}`;
  const settingCommon2 = `flex flex-col bg-gray-900 rounded-bl-[8px] rounded-br-[8px] ${isMobile ? "w-[343px] h-[112px]" : "w-[378px] h-[124px]"}`;
  const settingTitle = `font-bold text-2lg leading-[1] ml-[32px] ${isMobile ? "mt-[27px]" : "mt-[33px]"}`;
  const settingText = "font-medium text-lg leading-[1] ml-[32px] mt-[18px]";
  const footerImg = `${isMobile ? "w-[16px] h-[16px]" : "w-[20px] h-[20px]"}`;

  return (
    <div className="text-white">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={header}
            className={twMerge(
              clsx({
                "h-auto": true,
                "w-[287px] mt-[42px]": isMobile,
                "w-[538px] mt-[94px]": isTablet,
                "w-[722px] mt-[94px]": isPC,
              })
            )}
            alt="taskify"
          />
          <div
            className={`flex justify-center items-center font-bold ${isMobile ? "flex-col gap-[12px] mt-[26px]" : "mt-[48px]"}`}
          >
            <h2
              className={twMerge(
                clsx({
                  "tracking-[-2px]": true,
                  "text-[40px] leading-[1]": isMobile,
                  "text-[56px] leading-[100px]": isTablet,
                  "text-[76px] leading-[100px]": isPC,
                })
              )}
            >
              새로운 일정 관리&nbsp;
            </h2>
            <h2
              className={twMerge(
                clsx({
                  "font-[Montserrat] text-violet tracking-[-1px]": true,
                  "text-[42px] leading-[1]": isMobile,
                  "text-[70px] leading-[65px]": isTablet,
                  "text-[90px] leading-[65px]": isPC,
                })
              )}
            >
              Taskify
            </h2>
          </div>
          <Button
            variant="purple"
            onClick={() => router.push(ROUTE.LOGIN)}
            className={twMerge(
              clsx({
                "gap-[10px] font-medium": true,
                "w-[235px] h-[46px] px-[87px] py-[5px] text-md mt-[101px]":
                  isMobile,
                "w-[280px] h-[54px] px-[101px] py-[9px] text-2lg mt-[109px]":
                  isTablet,
                "w-[280px] h-[54px] px-[101px] py-[9px] text-2lg mt-[111px]":
                  isPC,
              })
            )}
          >
            로그인하기
          </Button>
        </div>
        <div className={pointStyle}>
          <div>
            <p
              className={twMerge(
                clsx({
                  "text-gray-500 font-medium leading-[1]": true,
                  "text-lg text-center mt-[60px]": isMobile,
                  "text-[22px] mt-[63px] ml-[60px]": isTablet,
                  "text-[22px] mt-[123px] ml-[60px]": isPC,
                })
              )}
            >
              Point 1
            </p>

            <h3
              className={`font-bold ${isMobile ? "text-[36px] text-center leading-[50px] mt-[83px] mb-[194px]" : "text-[48px] leading-[64px] mt-[126px] ml-[60px]"}`}
            >
              일의 우선순위를 <br />
              관리하세요
            </h3>
          </div>
          <Image
            src={point1}
            alt="point1"
            className={twMerge(
              clsx({
                "w-[296.11px] h-[248px] mt-[-25px] ml-[47px]": isMobile,
                "w-[519.39px] h-[435px] mt-[187px] ml-[145px]": isTablet,
                "w-[594px] h-[497px] mt-[-307px] ml-[606px]": isPC,
              })
            )}
          />
        </div>
        <div className={pointStyle}>
          <div
            className={twMerge(
              clsx({
                flex: true,
                "flex-col items-center": isMobile,
                "justify-between items-start": isTablet || isPC,
              })
            )}
          >
            <div>
              <p
                className={twMerge(
                  clsx({
                    "text-gray-500 font-medium leading-[1]": true,
                    "text-lg text-center mt-[60px]": isMobile,
                    "text-[22px] mt-[63px] ml-[60px]": isTablet,
                    "text-[22px] mt-[123px] ml-[644px]": isPC,
                  })
                )}
              >
                Point 2
              </p>
              <h3
                className={twMerge(
                  clsx({
                    "font-bold": true,
                    "text-[36px] text-center leading-[50px] mt-[83px]":
                      isMobile,
                    "text-[48px] leading-[64px] mt-[126px] ml-[60px]": isTablet,
                    "text-[48px] leading-[64px] mt-[100px] ml-[644px]": isPC,
                  })
                )}
              >
                해야 할 일을 <br />
                등록하세요
              </h3>
            </div>
          </div>
          <Image
            src={point2}
            alt="point2"
            className={twMerge(
              clsx({
                "w-[217px] h-[250px] mt-[167px] ml-[63px]": isMobile,
                "w-[360px] h-[415px] mt-[206px] ml-[152px]": isTablet,
                "w-[436px] h-[502px] mt-[-286px] ml-[108px]": isPC,
              })
            )}
          />
        </div>
        <div>
          <h4
            className={twMerge(
              clsx({
                "font-bold leading-[1] mt-[90px]": true,
                "text-[22px] text-center mb-[42px]": isMobile,
                "text-[28px] text-center mb-[36px]": isTablet,
                "text-[28px] mb-[36px]": isPC,
              })
            )}
          >
            생산성을 높이는 다양한 설정 ⚡
          </h4>
          <div
            className={twMerge(
              clsx({
                flex: true,
                "flex-col gap-[40px]": isMobile,
                "flex-col gap-[48px]": isTablet,
                "flex-row gap-[33px]": isPC,
              })
            )}
          >
            <div>
              <div className={settingCommon1}>
                <Image
                  src={landing_dashboard}
                  alt="dashboard"
                  width={isMobile ? 260 : 300}
                  height={isMobile ? 108 : 124}
                />
              </div>
              <div className={settingCommon2}>
                <div className={settingTitle}>대시보드 설정</div>
                <p className={settingText}>
                  대시보드 사진과 이름을 변경할 수 있어요.
                </p>
              </div>
            </div>
            <div>
              <div className={settingCommon1}>
                <Image
                  src={landing_invite}
                  alt="invite"
                  width={isMobile ? 260 : 300}
                  height={isMobile ? 200 : 232}
                />
              </div>
              <div className={settingCommon2}>
                <div className={settingTitle}>초대</div>
                <p className={settingText}>새로운 팀원을 초대할 수 있어요.</p>
              </div>
            </div>
            <div>
              <div className={settingCommon1}>
                <Image
                  src={landing_members}
                  alt="members"
                  width={isMobile ? 260 : 300}
                  height={isMobile ? 172 : 196}
                />
              </div>
              <div className={settingCommon2}>
                <div className={settingTitle}>구성원</div>
                <p className={settingText}>
                  구성원을 초대하고 내보낼 수 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          clsx({
            "flex justify-between items-center w-full min-h-[100px] font-normal text-gray-500":
              true,
            "flex-col px-[129px] mt-[120px] text-xs": isMobile,
            "flex-row px-[40px] mt-[160px] text-lg": isTablet,
            "flex-row px-[140px] mt-[160px] text-lg": isPC,
          })
        )}
      >
        <div>©codeit - 2023</div>
        <div
          className={`flex ${isMobile ? "gap-[20px] mt-[12px]" : "gap-[32px]"}`}
        >
          <div>Privacy Policy</div>
          <div>FAQ</div>
        </div>
        <div
          className={`flex ${isMobile ? "justify-center items-center mt-[68px] mb-[90px] gap-[20px]" : "gap-[14px]"}`}
        >
          <Link href={`https://mail.google.com/`} target="_blank">
            <Image src={mail} alt="mail" className={footerImg} />
          </Link>
          <Link href={`https://www.facebook.com/`} target="_blank">
            <Image src={facebook} alt="facebook" className={footerImg} />
          </Link>
          <Link href={`https://www.instagram.com/`} target="_blank">
            <Image src={instagram} alt="instagram" className={footerImg} />
          </Link>
        </div>
      </div>
    </div>
  );
}
