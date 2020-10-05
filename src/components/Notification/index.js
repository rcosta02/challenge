/*
 * Notification - displays an animated message when a line is reorded and when the order is saved.
 */

import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import "./index.css";

// State coming from redux store
const Notification = ({state}) => {
    
    // Display the message when alert is updated.
    const [alert, setAlert] = useState(null);
    useEffect(() => {
        if(state.id !== 0){
            // Using key random, so it can restart the animation when changed.
            setAlert(<div key={Math.random()} className="alert"><span>{state.message}</span></div>);
        }
    }, [state]);

    return (
        <div id="notification">
            <svg id="ns" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1044 556">
                <defs>
                    <clipPath id="clip-bg">
                        <rect width="1044" height="556"/>
                    </clipPath>
                    <clipPath id="clip-t">
                        <rect width="1044" height="556"/>
                    </clipPath>
                    <clipPath id="clip-codeLines">
                        <rect width="1044" height="556"/>
                    </clipPath>
                    <clipPath id="clip-body">
                        <rect width="1044" height="556"/>
                    </clipPath>
                    <clipPath id="clip-head">
                        <rect width="1044" height="556"/>
                    </clipPath>
                </defs>
                <g id="bg" clipPath="url(#clip-bg)">
                    <g id="Group_6" data-name="Group 6" transform="translate(-261 -151)">
                    <path id="Path_1" data-name="Path 1" d="M1040.82,611.12q-1.74,3.75-3.47,7.4-2.7,5.67-5.33,11.12c-.78,1.61-1.56,3.19-2.32,4.77-8.6,17.57-16.63,33.11-23.45,45.89A73.21,73.21,0,0,1,942.44,719l-151.65,1.65h-1.6l-13,.14-11.12.12-34.1.37h-1.38l-17.36.19h-.53l-107,1.16-95.51,1-11.11.12-69,.75H429l-44.75.48h-.48l-141.5,1.53-42.33.46a88.068,88.068,0,0,1-26.67-3.82,86.39,86.39,0,0,1-39.09-24.75C116,678.37,102.75,655,93.85,629.64q-1.93-5.49-3.6-11.12C59.44,514.37,97,380,164.6,290.08q4.25-5.64,8.64-11l.07-.08c20.79-25.52,44.1-46.84,68.93-62,44-26.91,92.75-34.49,140.7-11.9,40.57,19.12,78.45,28.11,115.17,30.55,3.71.24,7.42.42,11.11.53,84.23,2.65,163.17-27.7,255.87-47.29,3.69-.78,7.39-1.55,11.12-2.28,66.13-13.16,139.49-20.1,226.73-5.51a189.089,189.089,0,0,1,26.76,6.4q5.77,1.86,11.12,4c41.64,16.94,64.35,48.24,74,87.46q1.37,5.46,2.37,11.11C1134.3,384.41,1084.19,518.23,1040.82,611.12Z" transform="translate(181.649 -21.945)" fill="#6c63ff" opacity="0.1"/>
                    <g id="Group_1" data-name="Group 1" transform="translate(260.989 150.965)" opacity="0.1">
                        <path id="Path_2" data-name="Path 2" d="M242.24,217V726.62l-42.33.46a88.071,88.071,0,0,1-26.67-3.82V279h.07C194.1,253.45,217.41,232.13,242.24,217Z" transform="translate(-79.34 -172.91)" fill="#6c63ff"/>
                        <path id="Path_3" data-name="Path 3" d="M1117.24,290.08H164.6q4.25-5.64,8.64-11V279h941.63Q1116.24,284.43,1117.24,290.08Z" transform="translate(-79.34 -172.91)" fill="#6c63ff"/>
                        <path id="Path_4" data-name="Path 4" d="M1040.82,191.51v427h-3.47q-2.7,5.67-5.33,11.12c-.78,1.61-1.56,3.19-2.32,4.77V187.47Q1035.47,189.33,1040.82,191.51Z" transform="translate(-79.34 -172.91)" fill="#6c63ff"/>
                        <path id="Path_5" data-name="Path 5" d="M776.21,186.58V720.83l-11.12.12V188.86C768.78,188.08,772.48,187.31,776.21,186.58Z" transform="translate(-79.34 -172.91)" fill="#6c63ff"/>
                        <path id="Path_6" data-name="Path 6" d="M509.22,236.15V723.73l-11.11.12V235.62C501.82,235.86,505.53,236,509.22,236.15Z" transform="translate(-79.34 -172.91)" fill="#6c63ff"/>
                        <path id="Path_7" data-name="Path 7" d="M1037.35,618.52q-2.7,5.67-5.33,11.12H93.85q-1.93-5.49-3.6-11.12Z" transform="translate(-79.34 -172.91)" fill="#6c63ff"/>
                    </g>
                    <rect id="Rectangle_1" data-name="Rectangle 1" width="19" height="57.66" transform="translate(472.589 416.795)" fill="#3f3d56"/>
                    <rect id="Rectangle_2" data-name="Rectangle 2" width="19" height="61" transform="translate(983.919 413.795)" fill="#3f3d56"/>
                    <path id="Path_8" data-name="Path 8" d="M863.1,533.65v13l-151.92,1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99L349.78,551.4h-.15l-44.65.42-.48.01-198.4,1.82v-15l46.65-28,93.6-.78,2-.01.66-.01,2-.03,44.94-.37,2.01-.01.64-.01,2-.01,14.41-.12.38-.01,35.55-.3h.29l277.4-2.34,6.79-.05h.68l5.18-.05,37.65-.31,2-.03,1.85-.02h.96l11.71-.09,2.32-.03,3.11-.02,9.75-.09,15.47-.13,2-.02,3.48-.02h.65l74.71-.64Z" transform="translate(260.989 150.965)" fill="#65617d"/>
                    <path id="Path_9" data-name="Path 9" d="M863.1,533.65v13l-151.92,1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99L349.78,551.4h-.15l-44.65.42-.48.01-198.4,1.82v-15l46.65-28,93.6-.78,2-.01.66-.01,2-.03,44.94-.37,2.01-.01.64-.01,2-.01,14.41-.12.38-.01,35.55-.3h.29l277.4-2.34,6.79-.05h.68l5.18-.05,37.65-.31,2-.03,1.85-.02h.96l11.71-.09,2.32-.03,3.11-.02,9.75-.09,15.47-.13,2-.02,3.48-.02h.65l74.71-.64Z" transform="translate(260.989 150.965)" opacity="0.2"/>
                    <path id="Path_10" data-name="Path 10" d="M375.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z" transform="translate(181.649 -21.945)" fill="#3f3d56"/>
                    <path id="Path_11" data-name="Path 11" d="M375.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z" transform="translate(181.649 -21.945)" opacity="0.1"/>
                    <path id="Path_12" data-name="Path 12" d="M377.44,656.57v24.49a6.13,6.13,0,0,1-3.5,5.54,6,6,0,0,1-2.5.6l-34.9.74a6,6,0,0,1-2.7-.57,6.12,6.12,0,0,1-3.57-5.57V656.57Z" transform="translate(181.649 -21.945)" fill="#3f3d56"/>
                    <rect id="Rectangle_3" data-name="Rectangle 3" width="47.17" height="31.5" transform="translate(941.919 634.625)" fill="#3f3d56"/>
                    <rect id="Rectangle_4" data-name="Rectangle 4" width="47.17" height="31.5" transform="translate(941.919 634.625)" opacity="0.1"/>
                    <rect id="Rectangle_5" data-name="Rectangle 5" width="47.17" height="31.5" transform="translate(939.919 634.625)" fill="#3f3d56"/>
                    <path id="Path_13" data-name="Path 13" d="M230.6,265.82v5.73l-19-.49v-5.24Z" transform="translate(260.989 150.965)" opacity="0.1"/>
                    <path id="Path_14" data-name="Path 14" d="M435,277.31l-22.83,164a4.3,4.3,0,0,1-4.37,3.71L225,440.28l-3.47-.09a4.3,4.3,0,0,1-4.16-4.87L243,263.64a4.3,4.3,0,0,1,4.54-3.63L431,272.43a4.29,4.29,0,0,1,4,4.88Z" transform="translate(181.649 -21.945)" fill="#65617d"/>
                    <path id="Path_15" data-name="Path 15" d="M175.93,99.16,156.6,250.49l168,5.33,20.66-146Z" transform="translate(260.989 150.965)" fill="#6c63ff"/>
                    <rect id="Rectangle_6" data-name="Rectangle 6" width="204.67" height="173.33" rx="5.33" transform="translate(645.589 247.785)" fill="#65617d"/>
                    <rect id="Rectangle_7" data-name="Rectangle 7" width="186" height="144.33" transform="translate(655.249 259.455)" fill="#6c63ff"/>
                    <path id="Path_16" data-name="Path 16" d="M741.93,262.82v3.79l-19,.39v-4.18Z" transform="translate(260.989 150.965)" opacity="0.1"/>
                    <path id="Path_17" data-name="Path 17" d="M907,432.53a3.08,3.08,0,0,1-3,3.28l-187.2,3.87a3.08,3.08,0,0,1-3.13-2.79L697.58,269.61a3.08,3.08,0,0,1,2.92-3.37L886.28,257l2-.1a3.07,3.07,0,0,1,3.22,2.8Z" transform="translate(181.649 -21.945)" fill="#65617d"/>
                    <path id="Path_18" data-name="Path 18" d="M628.93,103.16,798.6,94.82l14.33,152-168.33,4Z" transform="translate(260.989 150.965)" fill="#6c63ff"/>
                    <path id="Path_19" data-name="Path 19" d="M907,432.53a3.08,3.08,0,0,1-3,3.28L886.28,257l2-.1a3.07,3.07,0,0,1,3.22,2.8Z" transform="translate(181.649 -21.945)" opacity="0.1"/>
                    <path id="Path_20" data-name="Path 20" d="M247.57,260,225,440.28l-3.47-.09a4.3,4.3,0,0,1-4.16-4.87L243,263.64A4.3,4.3,0,0,1,247.57,260Z" transform="translate(181.649 -21.945)" opacity="0.1"/>
                    <rect id="Rectangle_8" data-name="Rectangle 8" width="19" height="17.08" transform="translate(472.589 457.375)" opacity="0.1"/>
                    <path id="Path_21" data-name="Path 21" d="M298.1,483.65v4.97l-47.17,1.26v-6.23Z" transform="translate(260.989 150.965)" opacity="0.1"/>
                    <path id="Path_22" data-name="Path 22" d="M460.69,485.27v168.2a4,4,0,0,1-3.85,3.95l-191.65,5.1h-.05a4,4,0,0,1-3.95-3.95V485.27a4,4,0,0,1,3.95-3.95h191.6a4,4,0,0,1,3.95,3.95Z" transform="translate(181.649 -21.945)" fill="#65617d"/>
                    <path id="Path_23" data-name="Path 23" d="M265.19,481.32v181.2h-.05a4,4,0,0,1-3.95-3.95V485.27a4,4,0,0,1,3.95-3.95Z" transform="translate(181.649 -21.945)" opacity="0.1"/>
                    <path id="Path_24" data-name="Path 24" d="M194.6,319.15H372.1V467.4l-177.5,4Z" transform="translate(260.989 150.965)" fill="#d4dfec"/>
                    <rect id="Rectangle_9" data-name="Rectangle 9" width="19" height="17.42" transform="translate(983.919 457.375)" opacity="0.1"/>
                    <path id="Path_25" data-name="Path 25" d="M726.1,483.65v6.41l-47.17-1.26v-5.15Z" transform="translate(260.989 150.965)" opacity="0.1"/>
                    <path id="Path_26" data-name="Path 26" d="M867.69,485.27v173.3a4,4,0,0,1-4,3.95h0L672,657.42a4,4,0,0,1-3.85-3.95V485.27a4,4,0,0,1,3.95-3.95H863.7a4,4,0,0,1,3.99,3.95Z" transform="translate(181.649 -21.945)" fill="#65617d"/>
                    <path id="Path_27" data-name="Path 27" d="M867.69,485.27v173.3a4,4,0,0,1-4,3.95h0V481.32h0a4,4,0,0,1,4,3.95Z" transform="translate(181.649 -21.945)" opacity="0.1"/>
                    <path id="Path_28" data-name="Path 28" d="M775.6,319.15H598.1V467.4l177.5,4Z" transform="translate(260.989 150.965)" fill="#d4dfec"/>
                    <path id="Path_29" data-name="Path 29" d="M663.19,485.27v168.2a4,4,0,0,1-3.85,3.95l-191.65,5.1h0a4,4,0,0,1-4-3.95V485.27a4,4,0,0,1,3.95-3.95h191.6A4,4,0,0,1,663.19,485.27Z" transform="translate(181.649 -21.945)" fill="#65617d"/>
                    <path id="Path_30" data-name="Path 30" d="M397.1,319.15H574.6V467.4l-177.5,4Z" transform="translate(260.989 150.965)" fill="#d4dfec"/>
                    <path id="Path_31" data-name="Path 31" d="M863.1,533.65v13l-151.92,1.4-1.62.03-57.74.53-1.38.02-17.55.15h-.52l-106.98.99L349.78,551.4h-.15l-44.65.42-.48.01-198.4,1.82v-15l202.51-1.33h.48l40.99-.28h.19l283.08-1.87h.29l.17-.01h.47l4.79-.03h1.46l74.49-.5,4.4-.02.98-.01Z" transform="translate(260.989 150.965)" opacity="0.1"/>
                    <path id="Path_44" data-name="Path 44" d="M716.37,657.17l-.1,1.43v.1l-.17,2.3-1.33,18.51-1.61,22.3-.46,6.28-1,13.44v.17l-107,1-175.59,1.9v.84h-.14v-1.12l.45-14.36.86-28.06.74-23.79.07-2.37a10.53,10.53,0,0,1,11.42-10.17c4.72.4,10.85.89,18.18,1.41l3,.22c42.33,2.94,120.56,6.74,199.5,2,1.66-.09,3.33-.19,5-.31,12.24-.77,24.47-1.76,36.58-3a10.53,10.53,0,0,1,11.6,11.23Z" transform="translate(181.649 -21.945)" opacity="0.1"/>
                    <path id="Path_47" data-name="Path 47" d="M377.44,677.87v3.19a6.13,6.13,0,0,1-3.5,5.54l-40.1.77a6.12,6.12,0,0,1-3.57-5.57v-3Z" transform="translate(181.649 -21.945)" opacity="0.1"/>
                    <path id="Path_48" data-name="Path 48" d="M298.6,515.57l-52.25,1V507.9l52.25-1Z" transform="translate(260.989 150.965)" fill="#3f3d56"/>
                    <path id="Path_49" data-name="Path 49" d="M298.6,515.57l-52.25,1V507.9l52.25-1Z" transform="translate(260.989 150.965)" opacity="0.1"/>
                    <path id="Path_50" data-name="Path 50" d="M300.6,515.57l-52.25,1V507.9l52.25-1Z" transform="translate(260.989 150.965)" fill="#3f3d56"/>
                    <path id="Path_61" data-name="Path 61" d="M776.94,668.3s1.33,14.6-1.67,17.19S776.94,668.3,776.94,668.3Z" transform="translate(181.649 -21.945)" opacity="0.1"/>
                    </g>
                </g>
                <g id="t" clipPath="url(#clip-t)">
                    <path id="Path_62" data-name="Path 62" d="M-.146.811,18.626-.97,18.18,29.286,0,31Z" transform="translate(173.24 210.968) rotate(8)" fill="#fff"/>
                </g>
                <g id="codeLines" clipPath="url(#clip-codeLines)">
                    <rect id="Rectangle_10" data-name="Rectangle 10" width="165" height="5" transform="translate(201 327)" fill="#6c63f7"/>
                    <rect id="Rectangle_11" data-name="Rectangle 11" width="165" height="5" transform="translate(201 337)" fill="#6c63f7"/>
                    <rect id="Rectangle_12" data-name="Rectangle 12" width="165" height="5" transform="translate(201 347)" fill="#6c63f7"/>
                    <rect id="Rectangle_13" data-name="Rectangle 13" width="165" height="5" transform="translate(201 357)" fill="#6c63f7"/>
                    <rect id="Rectangle_14" data-name="Rectangle 14" width="165" height="5" transform="translate(201 367)" fill="#6c63f7"/>
                    <rect id="Rectangle_15" data-name="Rectangle 15" width="165" height="5" transform="translate(201 377)" fill="#6c63f7"/>
                    <rect id="Rectangle_16" data-name="Rectangle 16" width="165" height="5" transform="translate(201 387)" fill="#6c63f7"/>
                    <rect id="Rectangle_17" data-name="Rectangle 17" width="165" height="5" transform="translate(201 397)" fill="#6c63f7"/>
                    <rect id="Rectangle_18" data-name="Rectangle 18" width="165" height="5" transform="translate(201 407)" fill="#6c63f7"/>
                    <rect id="Rectangle_19" data-name="Rectangle 19" width="165" height="5" transform="translate(201 417)" fill="#6c63f7"/>
                    <rect id="Rectangle_20" data-name="Rectangle 20" width="165" height="5" transform="translate(201 427)" fill="#6c63f7"/>
                    <rect id="Rectangle_21" data-name="Rectangle 21" width="165" height="5" transform="translate(201 437)" fill="#6c63f7"/>
                    <rect id="Rectangle_22" data-name="Rectangle 22" width="165" height="5" transform="translate(201 447)" fill="#6c63f7"/>
                    <rect id="Rectangle_23" data-name="Rectangle 23" width="165" height="5" transform="translate(201 457)" fill="#6c63f7"/>
                    <rect id="Rectangle_10-2" data-name="Rectangle 10" width="165" height="5" transform="translate(604 327)" fill="#6c63f7"/>
                    <rect id="Rectangle_11-2" data-name="Rectangle 11" width="165" height="5" transform="translate(604 337)" fill="#6c63f7"/>
                    <rect id="Rectangle_12-2" data-name="Rectangle 12" width="165" height="5" transform="translate(604 347)" fill="#6c63f7"/>
                    <rect id="Rectangle_13-2" data-name="Rectangle 13" width="165" height="5" transform="translate(604 357)" fill="#6c63f7"/>
                    <rect id="Rectangle_14-2" data-name="Rectangle 14" width="165" height="5" transform="translate(604 367)" fill="#6c63f7"/>
                    <rect id="Rectangle_15-2" data-name="Rectangle 15" width="165" height="5" transform="translate(604 377)" fill="#6c63f7"/>
                    <rect id="Rectangle_16-2" data-name="Rectangle 16" width="165" height="5" transform="translate(604 387)" fill="#6c63f7"/>
                    <rect id="Rectangle_17-2" data-name="Rectangle 17" width="165" height="5" transform="translate(604 397)" fill="#6c63f7"/>
                    <rect id="Rectangle_18-2" data-name="Rectangle 18" width="165" height="5" transform="translate(604 407)" fill="#6c63f7"/>
                    <rect id="Rectangle_19-2" data-name="Rectangle 19" width="165" height="5" transform="translate(604 417)" fill="#6c63f7"/>
                    <rect id="Rectangle_20-2" data-name="Rectangle 20" width="165" height="5" transform="translate(604 427)" fill="#6c63f7"/>
                    <rect id="Rectangle_21-2" data-name="Rectangle 21" width="165" height="5" transform="translate(604 437)" fill="#6c63f7"/>
                    <rect id="Rectangle_22-2" data-name="Rectangle 22" width="165" height="5" transform="translate(604 447)" fill="#6c63f7"/>
                    <rect id="Rectangle_23-2" data-name="Rectangle 23" width="165" height="5" transform="translate(604 457)" fill="#6c63f7"/>
                    <rect id="Rectangle_10-3" data-name="Rectangle 10" width="165" height="5" transform="translate(403 327)" fill="#6c63f7"/>
                    <rect id="Rectangle_11-3" data-name="Rectangle 11" width="165" height="5" transform="translate(403 337)" fill="#6c63f7"/>
                    <rect id="Rectangle_12-3" data-name="Rectangle 12" width="165" height="5" transform="translate(403 347)" fill="#6c63f7"/>
                    <rect id="Rectangle_13-3" data-name="Rectangle 13" width="165" height="5" transform="translate(403 357)" fill="#6c63f7"/>
                    <rect id="Rectangle_14-3" data-name="Rectangle 14" width="165" height="5" transform="translate(403 367)" fill="#6c63f7"/>
                </g>
                <g id="head" clipPath="url(#clip-head)">
                    <g id="Group_3" data-name="Group 3" transform="translate(-121 -77)">
                    <path id="Path_33" data-name="Path 33" d="M617.94,550.07s-99.5,12-90,0c3.44-4.34,4.39-17.2,4.2-31.85-.06-4.45-.22-9.06-.45-13.65-1.1-22-3.75-43.5-3.75-43.5s87-41,77-8.5c-4,13.13-2.69,31.57.35,48.88.89,5.05,1.92,10,3,14.7a344.66,344.66,0,0,0,9.65,33.92Z" transform="translate(34.649 -97.945)" fill="#fbbebe"/>
                    <path id="Path_34" data-name="Path 34" d="M617.94,550.07s-99.5,12-90,0c3.44-4.34,4.39-17.2,4.2-31.85,15.17-6.48,34.47-1.65,34.47-1.65,20.32-4.05,33.35-3.26,41.68-.42a344.66,344.66,0,0,0,9.65,33.92Z" transform="translate(34.649 -97.945)" opacity="0.1"/>
                    <path id="Path_41" data-name="Path 41" d="M605.29,501.45a47.022,47.022,0,0,1-4.5,1.74c-10.78,3.72-21.65,7.47-33,8.83s-23.26.16-33.16-5.5a28.764,28.764,0,0,1-3-1.95c-1.1-22-3.75-43.5-3.75-43.5s87-41,77-8.5C600.9,465.7,602.25,484.14,605.29,501.45Z" transform="translate(34.649 -97.945)" opacity="0.1"/>
                    <path id="Path_42" data-name="Path 42" d="M552.52,364.84a9.47,9.47,0,0,1-8.32-1.75l2.08,2.89a8.47,8.47,0,0,1-6.78-2.25,34.082,34.082,0,0,0,.32,7.75,14.52,14.52,0,0,1-9.56-3,4.42,4.42,0,0,0,2.64,4.31,14.34,14.34,0,0,0-15.6,10.71l5.22.48a18.469,18.469,0,0,0-10.44,6.37c-1.6,2-2.82,4.56-2.12,7s4.08,4,5.92,2.26a27.94,27.94,0,0,0-6.1,22.79,14.469,14.469,0,0,1,.46,5.26c-.33,1.65-1.37,3.08-1.89,4.69-1,2.92-.05,6.09.84,9l4.69,15.42c1.7,5.57,3.39,11.15,5.61,16.54a82.084,82.084,0,0,1,4,10.51c1.26,4.84,1.31,10.14,4,14.37a19.93,19.93,0,0,0,7.18,6.33c9.89,5.66,21.84,6.86,33.16,5.5s22.18-5.11,32.95-8.83a31,31,0,0,0,6.84-3c7.45-4.88,9.11-14.86,10.5-23.65,1.55-9.8,3.62-19.58,7.29-28.8,2.18-5.49,5-11.06,4.52-16.94-.61-7.81-6.79-14.14-8.32-21.82a19,19,0,0,1,.07-7.77,17.66,17.66,0,0,0,.79-4.7c-.17-3.22-2.81-5.7-5.29-7.77Q609.11,380,600.52,374c-.29-2,2.43-2.86,3.66-4.44,1.74-2.23-.06-5.77-2.7-6.81s-5.6-.36-8.35.33a6.59,6.59,0,0,0-11.55-5.11,10.2,10.2,0,0,0-8.42-6.08c-6.63-.52-6.76,4.55-11,7.34s-7.74-.89-11-3.57A9.28,9.28,0,0,0,552.52,364.84Z" transform="translate(34.649 -97.945)" fill="#3f3d56"/>
                    <g id="Group_2" data-name="Group 2" transform="translate(113.989 74.965)" opacity="0.1">
                        <path id="Path_51" data-name="Path 51" d="M552.93,361.56a9.751,9.751,0,0,1-1.89-4.34,9.49,9.49,0,0,0,.42,4.6A9,9,0,0,0,552.93,361.56Z" transform="translate(-79.34 -172.91)"/>
                        <path id="Path_52" data-name="Path 52" d="M540.23,368.2a35.152,35.152,0,0,1-.37-3.7c0,1.23,0,2.47,0,3.71Z" transform="translate(-79.34 -172.91)"/>
                        <path id="Path_53" data-name="Path 53" d="M621.73,401.57a18.332,18.332,0,0,1,.36-2.65,18,18,0,0,0,.8-4.69,6.162,6.162,0,0,0-.16-1.06c-.17.92-.44,1.84-.64,2.75a19.139,19.139,0,0,0-.36,5.65Z" transform="translate(-79.34 -172.91)"/>
                        <path id="Path_54" data-name="Path 54" d="M600.93,370.67l1.09.79a19.707,19.707,0,0,0,2.57-2.22,3.67,3.67,0,0,0,.38-3.64,3,3,0,0,1-.38.64C603.36,367.82,600.64,368.69,600.93,370.67Z" transform="translate(-79.34 -172.91)"/>
                        <path id="Path_55" data-name="Path 55" d="M518.76,380.29a12.317,12.317,0,0,0-.87,2.28,18.161,18.161,0,0,1,5-1.89Z" transform="translate(-79.34 -172.91)"/>
                        <path id="Path_56" data-name="Path 56" d="M532.55,369.41a14.832,14.832,0,0,1-1.88-1.23,4.249,4.249,0,0,0,.09,1.18,11.861,11.861,0,0,1,1.79.05Z" transform="translate(-79.34 -172.91)"/>
                        <path id="Path_57" data-name="Path 57" d="M630.32,428.33c-.41,4.85-2.67,9.52-4.5,14.12-3.67,9.22-5.74,19-7.29,28.81-1.39,8.79-3,18.77-10.5,23.64a30,30,0,0,1-6.83,3c-10.78,3.73-21.65,7.47-33,8.83s-23.26.17-33.16-5.49a20,20,0,0,1-7.18-6.33c-2.67-4.23-2.72-9.53-4-14.37a82.216,82.216,0,0,0-4-10.52c-2.21-5.38-3.91-11-5.6-16.53q-2.35-7.71-4.69-15.43a28.811,28.811,0,0,1-1.14-4.75c-.39,2.56.37,5.24,1.14,7.75q2.34,7.73,4.69,15.43c1.69,5.57,3.39,11.15,5.6,16.53a82.21,82.21,0,0,1,4,10.52c1.26,4.84,1.31,10.14,4,14.37a20,20,0,0,0,7.18,6.33c9.9,5.66,21.84,6.85,33.16,5.49s22.18-5.1,33-8.83a30,30,0,0,0,6.83-3c7.45-4.87,9.11-14.85,10.5-23.64,1.55-9.81,3.62-19.59,7.29-28.81,2.18-5.48,5-11.05,4.52-16.94C630.34,428.45,630.32,428.39,630.32,428.33Z" transform="translate(-79.34 -172.91)"/>
                        <path id="Path_58" data-name="Path 58" d="M510.63,424.46v-.11a14,14,0,0,0-.46-5.25,26.592,26.592,0,0,1-.39-3.32,27.352,27.352,0,0,0,.39,6.32C510.33,422.88,510.51,423.67,510.63,424.46Z" transform="translate(-79.34 -172.91)"/>
                        <path id="Path_59" data-name="Path 59" d="M513.68,400a27.741,27.741,0,0,1,2.61-3.67c-1.83,1.75-5.21.19-5.92-2.24a5.831,5.831,0,0,0,0,3,4.39,4.39,0,0,0,3.31,2.91Z" transform="translate(-79.34 -172.91)"/>
                    </g>
                    </g>
                </g>
                <g id="body" clipPath="url(#clip-body)">
                    <g id="Group_4" data-name="Group 4" transform="translate(-378 -415)">
                    <path id="Path_35" data-name="Path 35" d="M429.08,725.44v-.84l175.62-1.91,107-1h.3l-.11,1.48.15-1.48h.19v-.17l1.37-13.45.52-5.09.16-1.59.14-1.33,6.18-20.61,6.18-20.58,5.2-17.33,7.94-26.48s-4.5-10.5-7-13.5-5-23.5-5-23.5-21.34-20.33-30.67-22.67c-3.91-1-11.63-2.33-19.83-4-3.07-.62-6.22-1.28-9.25-2-1.71-.39-3.39-.8-5-1.21a87.9,87.9,0,0,1-9.25-2.86,20.7,20.7,0,0,1-4.5-2.29c-7.35-5.39-25.77-6-26.48-6h0a.42.42,0,0,1,0-.07v-.09a10.246,10.246,0,0,0,0-1.26,8.03,8.03,0,0,0-.09-1.4,1.262,1.262,0,0,0-.07-.5c-.05-.36-.11-.74-.2-1.14a4.983,4.983,0,0,0-.12-.53,17.212,17.212,0,0,0-1.25-3.49c-.07-.16-.16-.33-.24-.49a18.249,18.249,0,0,0-1.7-2.63c-.13-.17-.27-.35-.42-.52a19.577,19.577,0,0,0-2.72-2.64c-.27-.21-.55-.43-.84-.63a4.668,4.668,0,0,0-.51-.36l-.89-.58-.83-.48c-.73-.4-1.5-.79-2.34-1.16-.26-.12-.54-.23-.82-.34s-.72-.28-1.09-.42h-.06L608,518c-.57-.19-1.15-.36-1.76-.53l-.93-.24-1-.23-1-.21c-1-.2-2.07-.38-3.19-.52l-1.14-.14-1.17-.12-1.21-.1-1.72-.1-2-.07a124.707,124.707,0,0,0-26.251,2.792,72.268,72.268,0,0,0-18.249-1.682h-.87l-1,.06h-.64l-1.29.12a9.588,9.588,0,0,0-1.3.15c-.43.06-.88.11-1.31.18l-.66.11c-.65.11-1.31.23-2,.37q-.33.06-.66.15c-.87.19-1.74.42-2.6.68-.43.12-.86.26-1.29.41-.22.06-.43.14-.64.22l-.64.23-.63.25-.75.3c-.38.16-.75.33-1.12.51-.21.09-.42.19-.62.3s-.41.2-.6.31a27.75,27.75,0,0,0-6.21,4.38l-.51.49-.5.51c-.17.17-.33.35-.49.53a23.82,23.82,0,0,0-1.82,2.25c-.16.21-.31.42-.46.64a26.688,26.688,0,0,0-1.72,2.92c-.13.24-.25.49-.37.73a32.7,32.7,0,0,0-2,5.25q-.28,1-.51,2S494,550.24,476.44,557c-4.67,1.8-9.07,3.43-12.75,4.66-1.07.36-2.07.69-3,1a26.7,26.7,0,0,1-6.25,1.44,19.665,19.665,0,0,0-3,.28c-8.07,1.31-21.9,7-23.41,12.71a3.69,3.69,0,0,0-.1,1.4s0,.07,0,.11c1,7-6,6-6,6s-2.5,18.5-6,23.5c-2.53,3.6-4.26,11.63-4.48,17.69h0a19.609,19.609,0,0,0,.44,5.63v.14c.4,1.34-.56,5-2.19,9.69-1.77,5.15-4.35,11.55-6.83,17.59-3.74,9.12-7.26,17.4-7.48,19.22-.09.81-.35,2.26-.71,4.13-1.46,7.62-4.7,22.13-6.3,28-1.19,4.38-2.92,10.38-4.11,14.5a1.4,1.4,0,0,1-.1.35L429,724.6v.84h.14Z" transform="translate(291.649 242.055)" fill="#6c63ff"/>
                    <path id="Path_36" data-name="Path 36" d="M445.44,607.57s57,29.5,77.5,26Z" transform="translate(291.649 242.055)" opacity="0.1"/>
                    <path id="Path_37" data-name="Path 37" d="M561.44,595.57s55.5,18,74,20.5S561.44,595.57,561.44,595.57Z" transform="translate(291.649 242.055)" opacity="0.1"/>
                    <path id="Path_38" data-name="Path 38" d="M623,537.65c-29,5.34-83.6,4.19-107.2,3.38,8.65-31,50.83-20.46,50.83-20.46C618.84,510.15,622.84,531.77,623,537.65Z" transform="translate(291.649 242.055)" opacity="0.1"/>
                    <path id="Path_39" data-name="Path 39" d="M623,535.65c-29,5.34-83.6,4.19-107.2,3.38,8.65-31,50.83-20.46,50.83-20.46C618.84,508.15,622.84,529.77,623,535.65Z" transform="translate(291.649 242.055)" fill="#6c63ff"/>
                    <path id="Path_40" data-name="Path 40" d="M776.94,672.32s34.16-5.25,34.83,9.75-17.42,25.48-17.42,25.48Z" transform="translate(291.649 242.055)" fill="#fbbebe"/>
                    <path id="Path_43" data-name="Path 43" d="M802.27,702.32s-.89,2.12-2.53,5.19a69,69,0,0,1-9,13.17l-.27.29h-1.62l-57.74.53h-1.38l-.17-.2-11.2-13.29L714.14,703l-.17-.21-.36-.42-.2-.24-.26-.31-8.21-9.74,3-12.5,5.11-21.06.13-.51,1-4,.71-3,2.38-9.78,8.16-33.65,14.5,7.5,15.29,27,8.21,14.5h4.5c.85,0,2.8,1.64,4.76,3.53.7.67,1.4,1.38,2,2,1.78,1.84,3.19,3.42,3.19,3.42s7.29.16,9.25,5.9a6.992,6.992,0,0,1,.25.85,40.3,40.3,0,0,0,2.53,6.56c1.29,2.81,2.91,6,4.55,9.19,3.05,5.85,6.15,11.42,7.29,13.44l.14.25Z" transform="translate(291.649 242.055)" fill="#6c63ff"/>
                    <path id="Path_45" data-name="Path 45" d="M429.08,725.44v-.84l175.62-1.91,107-1h.3v-.17l1-13.44.43-6,1.64-22.61,1.29-17.9v-.44a10.617,10.617,0,0,0-.11-2.47.3.3,0,0,0,0-.1,10.391,10.391,0,0,0-2-4.64,10.54,10.54,0,0,0-9.42-4c-12.11,1.24-24.34,2.23-36.58,3-1.67.12-3.34.22-5,.31-78.94,4.69-157.17.89-199.5-2l-3-.22c-7.33-.52-13.46-1-18.18-1.41a10.54,10.54,0,0,0-11.24,8.53,11,11,0,0,0-.18,1.64l-.68,22.16L429.54,710l-.44,14.36v1.12Z" transform="translate(291.649 242.055)" fill="#3f3d56"/>
                    <path id="Path_46" data-name="Path 46" d="M716.67,664.18l-1.23,15.33-1.83,22.85-.46,5.72-1,12.81-.06.64v.17h0l-.15,1.48.11-1.48h-.29l-107,1-175.65,1.9v-.28l.49-14.36,1-28.06.64-18.65A6.36,6.36,0,0,1,434.3,658a6.25,6.25,0,0,1,3.78-.9c2.1.17,4.68.37,7.69.59,4.89.36,10.92.78,17.94,1.22,13,.82,29.31,1.7,48,2.42,52,2,122.2,2.67,188.88-3.17,3-.26,6.1-.55,9.13-.84a6.26,6.26,0,0,1,3.48.66,5.159,5.159,0,0,1,.86.54,6.14,6.14,0,0,1,2,2.46,3.564,3.564,0,0,1,.25.61A6.279,6.279,0,0,1,716.67,664.18Z" transform="translate(291.649 242.055)" opacity="0.1"/>
                    <path id="Path_60" data-name="Path 60" d="M763.44,656.57s3.17,11.5,0,21.5S763.44,656.57,763.44,656.57Z" transform="translate(291.649 242.055)" opacity="0.1"/>
                    </g>
                </g>
            </svg>
            <div className="alerts">
                {alert}
            </div>
        </div>
    );
}

export default connect(state => ({state:state}))(Notification);