import React from 'react'
import web1 from '../Images/mental-math.png';

const Content = () => {
    return (
        <div>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='math-head'>
                            <span className="heading">
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Maths</p>
                            </span>
                            <span>
                                <h4>
                                    MENTAL MATH
                                </h4>
                            </span>
                            <span className='text'>
                                <p>
                                    Have Fun with Math! Get rid of your Math phobia.
                                    Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!
                                </p>
                            </span>
                        </div>
                        <div className='ul-listing'>
                            <ul>
                                <li>
                                    <i class="fa fa-birthday-cake mr-2" aria-hidden="true"></i> 6 - 8 Years
                                </li>
                                <li>
                                    <i class="fa fa-users mr-2" aria-hidden="true"></i> 7 - 8 Students

                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <i class="fa fa-clock-o mr-2" aria-hidden="true"></i> 6 - 8 Years
                                </li>
                                <li>
                                    <i class="fa fa-calendar-o mr-2" aria-hidden="true"></i> 5 Weeks Duration
                                </li>
                            </ul>
                        </div>
                        <div class="card header-card">
                            <div class="card-body">
                                ₹1499 INR For 10 live classes
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 c-content'>
                        <img src={web1} alt="" className='c-img' />
                    </div>
                </div>
            </div>
            <div className='container batch-cont mt-3'>
                <div className='batch'>
                    <span>
                        <h3>
                            Available Batches
                        </h3>
                    </span>
                    <div class="card batch-card">
                        <div className='card-header'>
                            <h4>Descriptions</h4>
                        </div>
                        <div class="card-body">
                            <p>
                                The course aims at enhancing mathematical skills and brain development. It improves one's number sense and helps them gain the ability to understand relationships between quantities, while stimulating their brain and improving
                                observation skills.
                            </p>
                            <h5 className='detail'>Details
                            <i className="fa fa-caret-down ml-2" aria-hidden="true"></i></h5>
                            <p>
                                The course aims at enhancing mathematical skills and brain development. It improves one's number sense
                                and helps them gain the ability
                                to understand relationships between quantities, while stimulating their brain and improving observation skills.
                            </p>
                            <p>
                                CLASS 1- Criss-cross multiplication
                            </p>
                            <p>
                                CLASS 2- Subtraction with numbers near to 10 and multiples of 10 Cutoff method addition/ Vyavakalanam method Dot method addition/ Rekhanth method
                            </p>
                            <p>
                                CLASS 3- Multiplication upto 100 (Done mentally)
                            </p>
                            <p>
                                CLASS 4- Subtraction with Numbers near 10 and multiple of 10
                            </p>
                            <p>
                                CLASS 5- Digit sum method Multiplication using base method part 1/ Nikhilam method, Fractions


                            </p>
                            <p>
                                CLASS 6- Base method multiplication part 2 Division part 1
                            </p>
                            <p>
                                CLASS 7 - LCM and HCF
                            </p>
                            <p>
                                CLASS 8- Multiplication with series of 9 Division part 2
                            </p>
                            <p>
                                CLASS 9- Multiplication with series of 1 Multiplication with 21,31 41 91 Base complement method subtraction/ Nikhilam method ,Division of any number by 11
                            </p>
                            <p>
                                CLASS 10- Division with series of 9 Multiplication by digits 12 to 19 Multiplication with 5 25 125 Percentage
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container batch-content mt-3'>
                <div class="card batch-card">
                    <div className='card-header'>
                        <h4>
                            HomeWork
                            <i className="fa fa-caret-down ml-2" aria-hidden="true"></i>
                        </h4>
                    </div>
                    <div class="card-body">
                        <p>
                            Comprehensive home assignments will be provided , which will be an extension of what is done is the class.
                        </p>


                    </div>
                </div>
            </div>
            <div className='container batch-content mt-3'>
                <div class="card batch-card">
                    <div className='card-header'>
                        <h4>Learning Goals</h4>
                    </div>
                    <div class="card-body">
                        <p>
                            Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator
                            yourself and be able to calculate 10-15 times faster than before!
                        </p>


                    </div>
                </div>
            </div>
            <div className='container-fluid footer'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <ul className='footer-link'>
                            <p>Your friend, your guide and your partner in the journey of parenting</p>
                            <ul className='d-flex i-link'>
                                <li>
                                <a><i className="fa-brands fa-facebook"></i></a>
                                </li>
                                <li>
                                <a><i className="fa-brands fa-instagram"></i></a>
                                </li>
                                <li>
                               <a> <i className="fa-brands fa-whatsapp"></i></a>
                                </li>
                            </ul>
                        </ul>
                        <a href='#' className='copyright'>© 2022 All Rights Reserved. Younglabs</a>
                    </div>
                    <div className='col-lg-3'>
                        <ul className='footer-link'>
                            <li>Quick Links</li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms and Conditions</a></li>
                            <li><a href='#'>shipping and Delivery</a></li>
                            <li><a href='#'>Return, Refund and Exchange policy</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <ul className='footer-link'>
                            <li>Address</li>
                            <li><a href='#'>A-39, Sector - 4, Noida -201301</a></li>
                            <li><a href='#'>( +91) 92890 29696</a></li>
                            <li><a href='#'>info@younglabs.in</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content