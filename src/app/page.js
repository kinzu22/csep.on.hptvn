'use client';
import Image from 'next/image';
import InViewMotion from './components/InViewMotion.component';

export default function Home() {
    return (
        <main className='min-h-screen '>
            <div className=''>
                <div className='flex justify-center items-center pt-9 pb-8'>
                    <Image
                        src='/images/hpt-logo.png'
                        alt='hpt-logo'
                        width={179}
                        height={107}
                        className='mr-32'
                    />
                    <Image
                        src='/images/csep-logo.png'
                        alt='hpt-logo'
                        width={233}
                        height={72}
                    />
                </div>
                <div className='bg-[#EBFDFFFF] pt-20 pb-20 pl-[7.563rem] pr-[6rem]'>
                    <div className='flex'>
                        <InViewMotion animationProps={'fadeInLeft'}>
                            <div>
                                <div className='h-[5.438rem]'>
                                    <h1 className='text-[#0835D9FF] text-[2.5rem] font-bold'>
                                        Giải pháp quản lý tài sản tập trung.
                                    </h1>
                                </div>
                                <div className='text-[#9095A1FF] text-base font-normal w-[33.813rem]'>
                                    <p>
                                        Giúp doanh nghiệp quản lý trọn vẹn vòng
                                        đời tài sản, trang thiết bị theo nhiều
                                        các khía cạnh khác. mang lại các lợi
                                        ích:
                                    </p>
                                    <ul className='list-disc ml-8'>
                                        <li>Quản lý hiệu quả ngân sách</li>
                                        <li>
                                            Mua sắm đơn giản, rõ ràng và chính
                                            xác
                                        </li>
                                        <li>
                                            Nắm bắt thông tin tài sản nhanh
                                            chóng
                                        </li>
                                        <li>
                                            Tự động hóa trong công tác bảo trì
                                            tài sản
                                        </li>
                                        <li>
                                            Số hóa toàn bộ các quy trình nghiệp
                                            vụ liên quan đến tài sản
                                        </li>
                                        <br />
                                    </ul>
                                    <p>
                                        Chuyển đổi số dễ dàng trên một nền tảng
                                        duy nhất.
                                    </p>
                                    <div className='mt-8 flex justify-around items-center text-base font-normal'>
                                        <a
                                            href='/signupForConsultation.html'
                                            className='hover:scale-110 hover:rounded-md duration-300 ease-in-out cursor-pointer shadow-md rounded gap-2 h-[3.25rem] px-5 flex justify-center items-center bg-[#5271FFFF] text-white hover:bg-[#1641FFFF] hover:text-white active:bg-[#0029DEFF]'
                                        >
                                            <span>+</span>
                                            <span>Đăng ký tư vấn</span>
                                        </a>
                                        <a
                                            href='#'
                                            className='hover:scale-110 hover:rounded-lg duration-300 ease-in-out cursor-pointer w-[6.063rem] h-[3.25rem] bg-[#F22128FF] flex justify-center items-center text-white rounded-[1.625rem] hover:bg-[#D20C13FF] active:bg-[#B90B11FF]'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                height='32'
                                                width='32'
                                                viewBox='0 0 576 512'
                                            >
                                                <path
                                                    d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z'
                                                    fill='#FFFFFF'
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href='#'
                                            className='hover:scale-110 hover:rounded-md duration-300 ease-in-out cursor-pointer border-solid border border-[#117B34FF] rounded gap-2 h-[3.25rem] px-5 flex justify-center items-center text-[#117B34FF] bg-white hover:text-[#0E642AFF] active:text-[#0A4D20FF]'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                height='16'
                                                width='16'
                                                viewBox='0 0 512 512'
                                            >
                                                <path
                                                    d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z'
                                                    fill='#117B34FF'
                                                />
                                            </svg>
                                            <span>Tải Brochure</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </InViewMotion>
                        <InViewMotion
                            animationProps={'fadeInRight'}
                            className='flex flex-1 justify-center items-center'
                        >
                            <Image
                                src='/images/img1.png'
                                width={532}
                                height={331}
                                alt='hpt-logo'
                            />
                        </InViewMotion>
                    </div>
                </div>
                <div className='bg-[#F3F4F6FF] h-[29.75rem] pt-[4rem]'>
                    <div className='flex items-center flex-col'>
                        <InViewMotion
                            animationProps={'fadeInUp'}
                            className='h-[3.5rem] w-[18.25rem] flex justify-center items-center text-[#00BDD6FF] font-bold mb-[3.5rem]'
                        >
                            <svg
                                className='w-[2.875rem] h-[2.875rem]'
                                fill='#00BDD6FF'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                            >
                                <path d='M12 8.89l.94 3.11h2.82l-2.27 1.62l.93 3.01L12 14.79l-2.42 1.84l.93-3.01L8.24 12h2.82L12 8.89M12 2l-2.42 8H2l6.17 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10h-7.58L12 2z' />
                            </svg>
                            <span className='text-[2.5rem]'>Điểm nổi bật</span>
                        </InViewMotion>
                        <div className='grid grid-rows-2 grid-cols-3 px-[7.5rem] gap-x-10 gap-y-8'>
                            <InViewMotion animationProps='fadeInLeft'>
                                <div>
                                    <p className='text-3xl text-[#00E5FFFF] font-bold h-[3.25rem]'>
                                        Giao diện hiện đại
                                    </p>
                                    <p className='text-xl text-[#9095A1FF] h-[3.75rem]'>
                                        Giao diện thân thiện, dễ tiếp cận.
                                    </p>
                                </div>
                            </InViewMotion>
                            <InViewMotion animationProps='fadeInUp'>
                                <div>
                                    <p className='text-3xl text-[#00E5FFFF] font-bold h-[3.25rem]'>
                                        Quy trình nghiệp vụ
                                    </p>
                                    <p className='text-xl text-[#9095A1FF] h-[3.75rem]'>
                                        Đầy đủ quy trình nghiệp vụ quản lý vòng
                                        đời tài sản.
                                    </p>
                                </div>
                            </InViewMotion>
                            <InViewMotion
                                animationProps='fadeInRight'
                                className='row-span-3'
                            >
                                <div>
                                    <p className='text-3xl text-[#00E5FFFF] font-bold h-[3.25rem]'>
                                        Tùy chỉnh linh hoạt
                                    </p>
                                    <p className='text-xl text-[#9095A1FF] h-[3.75rem]'>
                                        Nền tảng mạnh mẽ, linh hoạt có khả năng
                                        mở rộng và tùy chỉnh (may đo) linh hoạt
                                        cho từng khách hàng theo từng nhu cầu cụ
                                        thể.
                                    </p>
                                </div>
                            </InViewMotion>
                            <InViewMotion animationProps='fadeInLeft'>
                                <div>
                                    <p className='text-3xl text-[#00E5FFFF] font-bold h-[3.25rem]'>
                                        Tính năng chuyên sâu
                                    </p>
                                    <p className='text-xl text-[#9095A1FF] h-[3.75rem]'>
                                        Đầy đủ các tính năng quản lý vòng đời
                                        tài sản.
                                    </p>
                                </div>
                            </InViewMotion>
                            <InViewMotion animationProps='fadeInUp'>
                                <div>
                                    <p className='text-3xl text-[#00E5FFFF] font-bold h-[3.25rem]'>
                                        Năng lực tích hợp
                                    </p>
                                    <p className='text-xl text-[#9095A1FF] h-[3.75rem]'>
                                        Cung cấp API, tích hợp với các hệ thống
                                        khác.
                                    </p>
                                </div>
                            </InViewMotion>
                        </div>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className='flex flex-col'>
                        <InViewMotion
                            animationProps='fadeInUp'
                            className='my-[4rem]'
                        >
                            <p className='text-center text-[#0835D9FF] text-[2.5rem] font-bold'>
                                Các phân hệ chính
                            </p>
                        </InViewMotion>
                        <div className='flex flex-1 justify-around mb-[4.25rem]'>
                            <InViewMotion animationProps='fadeInLeft'>
                                <div className='bg-[#F3F4F6FF] w-[17rem] hover:scale-110 hover:rounded-xl duration-300 ease-in-out cursor-pointer'>
                                    <div className='flex flex-col justify-center items-center mb-[2.625rem]'>
                                        <Image
                                            src='/icons/calendar-icon.png'
                                            alt='calendar-icon'
                                            width={63}
                                            height={51}
                                            className='my-[2.188rem]'
                                        />
                                        <p className='text-[#0835D9FF] text-2xl font-bold'>
                                            SFM
                                        </p>
                                        <p className='text-lg text-[#171A1FFF]'>
                                            Quản lý kế hoạch
                                        </p>
                                    </div>
                                    <a
                                        className='pb-4 flex justify-end items-center mr-2.5 text-[#00BDD6FF] hover:text-[#0096b3]'
                                        href="'#"
                                    >
                                        <span className='text-base'>
                                            Xem thêm
                                        </span>
                                        <svg
                                            className='w-[1.2rem] h-[1.2rem]'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 320 512'
                                        >
                                            <path
                                                d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                                                fill='#00BDD6FF'
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </InViewMotion>
                            <InViewMotion animationProps='fadeInUp'>
                                <div className='bg-[#F3F4F6FF] w-[17rem] hover:scale-110 hover:rounded-xl duration-300 ease-in-out cursor-pointer'>
                                    <div className='flex flex-col justify-center items-center mb-[2.625rem]'>
                                        <Image
                                            src='/icons/mua-sam-icon.png'
                                            alt='mua-sam-icon-icon'
                                            width={65}
                                            height={60}
                                            className=' my-[2.188rem]'
                                        />
                                        <p className='text-[#0835D9FF] text-2xl font-bold'>
                                            SSP
                                        </p>
                                        <p className='text-lg text-[#171A1FFF]'>
                                            Quản lý mua sắm
                                        </p>
                                    </div>
                                    <a
                                        className='pb-4 flex justify-end items-center mr-2.5 text-[#00BDD6FF] hover:text-[#0096b3]'
                                        href="'#"
                                    >
                                        <span className='text-base'>
                                            Xem thêm
                                        </span>
                                        <svg
                                            className='w-[1.2rem] h-[1.2rem]'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 320 512'
                                        >
                                            <path
                                                d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                                                fill='#00BDD6FF'
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </InViewMotion>
                            <InViewMotion animationProps='fadeInUp'>
                                <div className='bg-[#F3F4F6FF] w-[17rem] hover:scale-110 hover:rounded-xl duration-300 ease-in-out cursor-pointer'>
                                    <div className='flex flex-col justify-center items-center mb-[2.625rem]'>
                                        <Image
                                            src='/icons/asset-icon.png'
                                            alt='asset-icon-icon'
                                            width={60}
                                            height={54}
                                            className='my-[2.188rem]'
                                        />
                                        <p className='text-[#0835D9FF] text-2xl font-bold'>
                                            SEAM
                                        </p>
                                        <p className='text-lg text-[#171A1FFF]'>
                                            Quản lý tài sản
                                        </p>
                                    </div>
                                    <a
                                        className='pb-4 flex justify-end items-center mr-2.5 text-[#00BDD6FF] hover:text-[#0096b3]'
                                        href="'#"
                                    >
                                        <span className='text-base'>
                                            Xem thêm
                                        </span>
                                        <svg
                                            className='w-[1.2rem] h-[1.2rem]'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 320 512'
                                        >
                                            <path
                                                d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                                                fill='#00BDD6FF'
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </InViewMotion>
                            <InViewMotion animationProps='fadeInRight'>
                                <div className='bg-[#F3F4F6FF] w-[17rem] hover:scale-110 hover:rounded-xl duration-300 ease-in-out cursor-pointer'>
                                    <div className='flex flex-col justify-center items-center mb-[2.625rem]'>
                                        <Image
                                            src='/icons/smom-icon.png'
                                            alt='smom-icon'
                                            width={56}
                                            height={59}
                                            className='my-[2.188rem]'
                                        />
                                        <p className='text-[#0835D9FF] text-2xl font-bold'>
                                            SMOM
                                        </p>
                                        <p className='text-lg text-[#171A1FFF]'>
                                            Quản lý bảo trì
                                        </p>
                                    </div>
                                    <a
                                        className='pb-4 flex justify-end items-center mr-2.5 text-[#00BDD6FF] hover:text-[#0096b3]'
                                        href="'#"
                                    >
                                        <span className='text-base'>
                                            Xem thêm
                                        </span>
                                        <svg
                                            className='w-[1.2rem] h-[1.2rem]'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 320 512'
                                        >
                                            <path
                                                d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'
                                                fill='#00BDD6FF'
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </InViewMotion>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F3F4F6FF]'>
                    <InViewMotion
                        animationProps='fadeInUp'
                        className='flex justify-center flex-col items-center'
                    >
                        <div className='w-[22.125rem] h-[3.25rem] mt-[4rem] mb-[3rem] flex justify-center items-center bg-[#7A00B8FF] rounded-[1.625rem] text-white text-xl'>
                            <p>Tính năng nổi bật khác</p>
                        </div>
                        <div className='grid grid-rows-3 grid-flow-col gap-x-11 gap-y-3.5 pb-[4.25rem]'>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] text-wrap text-center'>
                                    Dashboard linh hoạt
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý Kế hoạch Ngân sách
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55c.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75zM19 19H5V5h14v14z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý hợp đồng
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M19.43 12.98c.04-.32.07-.64.07-.98c0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73c0 .21-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7l.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý hồ sơ tài sản
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý dự án mua sắm
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    viewBox='0 0 384 512'
                                >
                                    <path d='M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý công việc
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M21 8h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý Đối tác, Nhà cung cấp
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7zM7 9H4V5h3v4zm10 6h3v4h-3v-4zm0-10h3v4h-3V5z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý quy trình vận hành
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    viewBox='0 0 448 512'
                                >
                                    <path d='M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Cảnh báo, đo lường SLA
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    viewBox='0 0 512 512'
                                >
                                    <path d='M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý Kho - Vật tư
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.52L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.4-.38.4-1.01 0-1.41zm-3 1.6l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24l-3.09-3.09c1.24-.07 2.49.37 3.44 1.31a4.469 4.469 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.45 9.45l-.88.89z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Quản lý kế hoạch bảo trì
                                </p>
                            </div>
                            <div className='flex items-center border-2 border-dashed w-[16.25rem] h-[5.25rem] rounded-md'>
                                <svg
                                    className='w-10 h-10 fill-[#7A00B8FF] mx-[1.875rem]'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                >
                                    <path d='M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55l-1.27 1.27L7 16l7.19-7.19l-1.27-1.27l-5.91 5.93z' />
                                </svg>
                                <p className='w-[9.375rem] text-lg text-[#171A1FFF] mr-[0.688rem] text-wrap text-center'>
                                    Mobile App
                                </p>
                            </div>
                        </div>
                    </InViewMotion>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image
                        src='/images/csep-logo.png'
                        alt='hpt-logo-footer'
                        width={171}
                        height={54}
                        className='mt-[1.875rem] mb-[1.563rem]'
                    />
                    <p className='text-[#6F7787FF] text-base'>
                        Tải CSEP Mobile App trên Apple và Goole Store.
                    </p>
                    <div className='my-[1.75rem] flex gap-4'>
                        <a href='#'>
                            <Image
                                src='/icons/apple-store-icon.png'
                                alt='apple-store-icon-download'
                                width={172}
                                height={50}
                            />
                        </a>
                        <a href='#'>
                            <Image
                                src='/icons/google-play-download-icon.png'
                                alt='google-play-download-icon'
                                width={172}
                                height={50}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
