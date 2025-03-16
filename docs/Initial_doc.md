# E-COMMERCE WEB AND MOBILE APPLICATION DEVELOPMENT WITH DELIVERY AND AFFILIATE INTEGRATION

## OVERVIEW
Our client is in need of a custom Ecommerce web and mobile application with a delivery system and affiliate dashboard that is user-friendly, with a sales-boosting interface, minimal loading time, and high efficiency. Additionally, they require an admin web interface to effectively manage the entire system.

## INTERFACES

| Item    | Details    |
|---|---|
| Web Application    | 1.User [ with affiliate module ] 2.Super Admin 3.Operations Manager 4.HR Manager 5.Accounts 6.Warehouse 7.Delivery Hub    |
| Android Application   | 1.User 2.Delivery boy    |
| iOS Application    | 1.User 2.Delivery boy    |

# FUNCTIONAL REQUIREMENTS

## USER INTERFACE (WEB-BASED)

- **Signup**  
  - User should be able to sign-up to the system with the following details  
    - First name  
    - Last name  
    - Email ID  
    - Mobile Number  
    - Terms and Condition checkbox  
    - Email OTP  
    - Set Password  
    - Confirm Password  

- **Login**  
  - User should be able to login with  
    - Email ID and Password  
    - OR  
    - Email ID and OTP  

- **Home Page**  
  - Users should be able to select the location, to assure smooth ordering of the product. Every order is directly placed to the warehouse situated in the same district of the user chosen for delivery. Availability, delivery charge, pricing and other order options are depending upon the availability, distance and other parameters of the warehouse.  
  - Home Page will Hi-Light the USP and Products as well.  
  - Above the header, there will be a notification bar with coupon codes carousel  
  - In the product display part, there will be the following informations about the product  
    - Item name  
    - Price  
    - Cut Price [ If any ]  
    - % off [ If any ]  
    - Ratings [ If any ]  
    - Images [ Multiple, Which on hover ]

- **Cart**
  - User can access cart page from the top right corner of the header
  - Users can view / increase count/ delete products from the cart
  - Checkout and continue shopping button will be placed in this page
  - Users can click on the add to cart icon to add products to cart.

- **Wishlist**
  - User can access wishlist page from the top right corner of the header
  - Users can view / increase count/ delete products from the wishlist page
  - Move to cart option and continue shopping button will be placed in this page
  - Users can click on the add to cart icon to add products to cart.

- **Product detail page**
  - Product Image with zooming on hover option
  - Multiple images will be shown and user can click on each to view it in the main image box.
  - Following product details should be visible to the client
    - Product name
    - Price
    - Cut price [ if any ]
    - Offer % [ if any ]
    - SKU
    - Variants
    - Stock status
    - Instock
    - Limited Stock
    - Limited Stock with stock count [ if count is less than 5 ]
    - Out of stock
    - Description
    - Wash care
    - Shipping and Return Policy
    - Others

- **Filter option**
  - Category
  - Subcategory
  - Price Range
  - Department

- **Offers**
  - User should be able to view the offer
    - Title
    - Descriptions
    - Count-Down to end date
    - Products under this offer

- **Coupon codes**
  - Users should be able to see the coupon codes in the top of the header as a carousel.
  - While checkout, users should be able to see all the coupon codes available and use them. Only valid coupon codes will give them a discount.

- **Order**
  - User should be able to order a product, by
    - Adding it to the cart
    - Buy now

  - While ordering the product, user should be able to see the following details regarding the order
    - Product list with quantity and pricing
    - Tax details
    - Delivery charge, if any
    - Expected delivery date
    - Select / Add address
    - Payment option to complete the order

  - Order cancellation option will be there until the order is out for delivery.
  - Order return / replace option will be there for the number of days mentioned in the product adding time. Users can check the status from the orders page.
  - Order history with order again button.

- **Reviews and ratings**
  - Users should be able to view the review and rating of a product. Rating will be counted in 5 stars.
  - Only users who received the product can review it.
  - Review and rating will publish only after admin approval, otherwise, it remains visible only to the person who put the review.

- **Payment Gateway**
  - User should be able to pay using
    - UPI / QR Code
    - Card Payment
    - Internet Banking

- **Shipping Integration**
  - Shipping integration for seamless delivery, status updation, and user experience.

- **Settings**
  - Change Password
    - With email OTP
  - Change mobile number
    - With email OTP
  - Change email ID
    - With old email OTP

- **Profile**
  - User should be able to view / change the profile details
    - Name
    - Profile picture
    - Address
    - Add / Edit / Delete Address [ Multiple ]

- **Support**
  - User should be able to create support tickets by selecting the problem title.
  - User should be able to view the replies for admin ticket.
  - User should be able to view the ticket status and history [ opened / closed ].

- **Static Pages** [ About Us, Terms and Conditions, Privacy Policy, Return and Replacement Policy, Contact Us Page ]
- **Logout**

# AFFILIATE MODULE FOR E-COMMERCE

- User should be able to request for join in the affiliate program  
  - Admin should be able view the user details and admin has the authority to  
    - Approve  
    - Deny  
    - Held  

- Once the admin approved, User should be able see the infographic affiliate dashboard [ filter, today, yesterday, this week, this month, custom time period ]  
    - Products Promoted  
    - People clicked  
    - Commissions earned  
    - Pending commissions  
    - Available commissions  

- Withdrawal history  
    - Details history with filter option [ custom date ]

- Commission history  
    - Details history with filter option [ custom date ]

- User should be able to withdraw the available commission in the following methods  
    - Redeem to bank account  
    - Add / Select / Edit / Delete bank details  
    - Name  
    - Acc. Number  
    - IFSC code  
    - Select amount  
    - Apply for processing  
    - Redeem to wallet  
    - User should be able to redeem this points to his wallet and can purchase with money in the wallet.

- Users should be able to view the product list available for promotion and should be able to click on the generate link button, for generating their own links. When a click comes via that link, that sale will be calculated under this affiliate.

# ADMIN INTERFACE (WEB-BASED)

- **Login**
  - Admin should be able to login the credentials provided

- **Infographic Dashboard** [ filter, today, yesterday, this week, this month, custom time period ]
  - Sales count
  - Sales amount
  - Return count
  - Customer
  - New orders
  - Orders in shipping
  - Total categories
  - Total products
  - Total Affiliates
  - Affiliate Withdraw request amount

- **Settings**
  - Admin should be able to change the contact details
    - Phone number 1
    - Phone number 1
    - Email ID
    - Address
  - Admin should be able to reset the password

- **Operations Management**
  - Admin should be able to create operation manager with following details
    - Basic Details
    - Password [ verification ]

- **Product Overview**
- **Order Overview**
- **User Overview**
- **Offer overview**
- **Affiliate Overview**
- **Reviews and Ratings overview**
- **Warehouse Overview**
- **Delivery Hub Overview**
- **Delivery boy Overview**
- **Accounts Overview**
- **Order Tracking**
- **Report Generation**
  - Admin should be able to generate reports of all the relevant operations of this system

- **Logout**

# OPERATION MANAGER OVERVIEW (WEB-BASED)

- **Login**
  - Operation manager should be able to login the credentials provided

- **Infographic Dashboard** [filter, today, yesterday, this week, this month, custom time period ]
  - Sales count
  - Sales amount
  - Return count
  - Customer
  - New orders
  - Orders in shipping
  - Total categories
  - Total products
  - Total Affiliates
  - Affiliate Withdraw request amount

- **Settings**
  - Operation manager should be able to change the contact details
    - Phone number 1
    - Phone number 1
    - Email ID
    - Address
  - Operation manager should be able to reset the password

- **Product Management**
  - Department Management
    - Admin should be able to View / Add / Edit / Delete departments
  - Variants Management
    - Admin should be able to View / Add / Edit / Delete variants
  - Category
    - Admin should be able to View / Add / Edit / Delete categories
    - Title
    - Image
  - Subcategory
    - Admin should be able to View / Add / Edit / Delete subcategories
    - Title

- **Products**
  - Admin should be able to View / Add / Edit / Delete products
    - Select department
    - Select category
    - Select subcategory
    - Product name
    - Description
    - SKU
    - Variants
    - SKU Variants
    - Quantity
    - Price - Original
    - Discount %
    - Alert QTY - Minimum quantity
    - Features
    - Shipping and Return Policy
    - Others

- **Order management**
  - View
  - Print Slip
  - Invoice
  - Shipping
    - Admin should be able to change the status of shipping manually.
  - Return / Replace

- **User Management**
  - View user
    - Personal details
    - Order history
  - Suspend / Block user

- **Offer management**
  - Add / Edit / View / Delete Offers
    - Title
    - Description
    - Select Products under this offer
    - from % - to %
    - Start Date
    - End Date

- **Affiliate Management**
  - Admins should be able to view the affiliate dashboard with affiliates count
  - Sales via affiliate
  - New affiliate requests
  - Affiliate payment requests
  - Products count for affiliate promotion

- Admin should be able to view the new affiliate request and mark them as
  - Approved
  - Denied
  - Held

- Admin should be able to list products for affiliate selling. Affiliates can see them and generate their one sales links.

- Admin should be able to see the affiliate profile with infographic statistics of
  - Affiliate details
  - Products link generated
  - Clicks gained
  - Sales
  - Total commission
  - Commission withdraw
  - Commission available to withdraw
  - Performance chart
  - Detailed history of
    - Products link generated
    - Clicks gained
    - Total commission
    - Commission withdraw
    - Commission available to withdraw

- Admin should be able to suspend the affiliate
- Admin should be able to view the detailed list of withdrawal requests and should be able to change the status of the application, with transaction reference ID.

- **Coupon codes**
  - Add / Edit / View / Delete Coupon codes
    - Title
    - Code

- **Reports**
  - Sales and Profit [ filter - Time frame, Category, subcategory, collection, Fabric ] - Download to Excel option

- **View enquiries**
  - Filter - Latest
  - Reply enquiries [ Email ]
- **Reviews and Ratings management**
  - View reviews / Ratings
  - Approve reviews / ratings
- **Blogs**
  - Add / Edit / View / Delete Blogs
- **Support ticket management**
  - View Support Tickets [ Multiple conversation , Email Integration]
  - Reply Support Tickets
  - Close support tickets
- **Notification Management**
  - Add / Edit / View / Delete Notifications [ Shows in the Top of header ]
- **Warehouse**
  - Admin should be able to View / Add / Edit / Delete warehouse for each district with the following information
    - Warehouse ID [ Automatic generated ]
    - Warehouse name
    - Country
    - State
    - District
    - Email id
    - Address
    - Pin Code
    - Google map Location link
    - Mobile number
- Admin should be able to create manager interface for each warehouse added
  - Select warehouse Userid
  - Password
  - Confirm password
- Admin should be able to reset the password for the warehouse manager.
- Admin should be able to add products [ inventory ] to the warehouse
  - Select warehouse
  - Select product
  - Select Qty

- **Admin should be able to view warehouse with the following details**
  - Warehouse name
  - Total sales
  - Total products count
  - Total value
  - Orders
  - Orders on transit
  - Return / Replace
  - Detailed history
    - Inventory
    - Orders
    - Returns / Replace orders

# DELIVERY HUB

- **Admin should be able to View / Add / Edit / Delete delivery hub for each district with the following information**
  - Select warehouse
  - Delivery hub ID [ Automatic generated ]
  - Delivery hub name
  - Country [ auto fill by system ]
  - State [ auto fill by system ]
  - District [ auto fill by system ]
  - Email id
  - Address
  - Pin Code
  - Google map Location link
  - Mobile number

- **Admin should be able to create manager interface for each delivery hub added**
  - Select warehouse
  - Select delivery hub
  - Userid
  - Password
  - Confirm password

- **Admin should be able to reset the password for the delivery hub manager.**

- **Admin should be able to view delivery hub with the following details**
  - Warehouse name
  - Total sales
  - Total products count
  - Total value
  - Orders
  - Orders on transit
  - Return / Replace
  - Detailed history
    - Inventory
    - Orders
    - Returns / Replace orders

- **Admin should be able to view the orders with status**
- **Admin should be able to view the returned with status**

# DELIVERY BOY

- **Request**
  - Admin should be able to view the new delivery boy request with the following options
    - Freelancer / Staff request
    - Uploaded KYC details
    - Nearest delivery hub
  - Admin should be able to accept / reject / make freelancer [ for staff request ]

- **Admin should be able to view the delivery boy by filtering** [ pincode of delivery hub, name of delivery hub, delivery boy name, delivery boy mobile number ]
  - Details
  - Works completed
  - Works pending
  - Earnings till now [ for freelancers ]
  - Earnings withdrawn [ for freelancers ]
  - Detailed history of
    - Delivery completed
    - Delivery pending
    - Payment withdraw history

- **Payment Request** [ for freelancer ]
  - Admin should be able to view payment request
  - Admin should be able to change status of the payment request with transaction id.

- **Delivery details and status**
  - Detailed history of
    - Delivery completed
    - Delivery pending
    - Payment withdraw history

- **Delivery settings**
  - Delivery management
    - Add/manage delivery type
    - Eg: Bike, Car, Half Lorry, Truck
  - Manage
    - Delivery charge management
    - [0 - 15]
    - [15 - 30]
    - [30 - 50]
    - [50 - Above]

- **Delivery options management**
  - Add the following options by default
    - Free delivery
    - Delivery with charge
    - Freelancer
    - Charge per delivery
    - Bike [ per order ]
    - Car [ per order ]
    - Half Lorry [ per order ]
    - Truck [ per order ]

- **Track orders with**
  - Order id
  - Dispatch ID
  - Client phone number
  - Delivery hub name / ID

- **Logout**

# WAREHOUSE MANAGER

- **Login**
  - Warehouse manager should have a login screen with pre given credentials to access the admin dashboard.

- **Settings**
  - Warehouse manager should be able to request admin for changing the password.
  - Warehouse manager should have a logout option.

- **Dashboard**
  - Warehouse manager should have an attractive dashboard which contains the statistics regarding all the Order, Delivery, Returns, and Stock management
  - Warehouse manager should be able to click and view the details of the infographic boxes shown in the dashboard.
  - Warehouse manager should have a side menu with all the modules listed above.

- **Order Management**
  - Warehouse managers should be able to Register incoming and outgoing products by scanning the QR on the package.
  - When an order is received from the customer warehouse manager near notified on the same. Warehouse manager should be able to change the order status. Orders received before 5PM everyday will be shown to dispatch list in the dashboard. Warehouse manager should be able to the print slips to attach with on the package box with the following
    - Delivery address
    - Product details
    - Purchase details
    - QR Code
    - Other Product related details

- **When an order is dispatched, the warehouse manager should be able to scan the QR on the package. While scanning the QR the product delivery status should change automatically to “shipped”.**
- **In the delivery boy application for the main warehouse, the delivery boy should be able to view the delivery hub wise item list.**
- **When this item receives the delivery hub, the delivery hub manager should be able to scan the QR code on the package to register this inventory to the delivery hub. At this time, order tracking status also will automatically change to “reached delivery hub name.”**

- **Returns Management**
  - View returns and its status
    - With customer details and order details
    - Dispatch details
  - Sort returns zip code wise
    - With customer details and order details
    - Dispatch details

- **Re-Inventory Return product**
  - Warehouse manager should be able to add inventory returned products.
  - If the products has defect, warehouse manager should be able to mark product as defected and note the details as text.

- **Track orders**
  - Track orders with
    - Order id
    - Dispatch ID
    - Client phone number
    - Delivery hub name / ID

- **Ticket management**
  - Warehouse manager should able to view the tickets raised from the Delivery hubs
  - Warehouse manager should able to rise tickets to the admin
  - Warehouse manager should be able to reply the tickets from delivery hubs
  - Warehouse manager should be able to view the replies from the admin
  - Warehouse managers should be able to change the status of the tickets [ open / closed ]

- **Stock Management**
  - Warehouse manager should be able to view the stocks
  - Warehouse manager should be able to sort the stock with the following keys
    - Product name
    - Product category
  - Warehouse manager should be able to request for the following to admin
    - Packing materials
    - Other stationeries
  - Warehouse manager should be able to view the status of requested materials from admin

# DELIVERY HUB

- **Login**
  - Delivery hub manager should be able to login with the preset credentials provided by the admin / Warehouse manager.
  - If need to reset the password, Delivery hub manager should request the admin / Warehouse manager

- **Dashboard**
  - Delivery hub manager should have an attractive dashboard which contains the statistics regarding all the Order, Delivery, Returns, and Stock management
  - Delivery hub manager should be able to click and view the details of the infographic boxes shown in the dashboard.
  - Delivery hub manager should have a side menu with all the modules listed above.

- **Track orders**
  - Track orders with
    - Order id
    - Dispatch ID
    - Client phone number
    - Delivery hub name / ID

- **Inventory**
  - Delivery hub manager should be able scan the QR on the product to register the inventory of products from the warehouse. When the scanning succeeded, status of delivery will be changed to “reached on [delivery hub location]

- **Delivery management**
  - Delivery hub manager should be able to assign delivery boys the items.
  - Track order
  - Re-Assign delivery boy

- **Return management**
  - Delivery hub manager should be able to assign delivery boys the items.
  - Track order
  - Re-Assign delivery boy
  - Re-Inventory Return product
    - Warehouse manager should be able to add inventory returned products.
    - If the product has a defect, the warehouse manager should be able to mark the product as defective and note the details as text.

- **Delivery boy management**
  - View delivery boys
  - Mark the attendance of delivery of [ staff ]
  - Review delivery boy

- **Support tickets**
  - Delivery hub manager should able to view the tickets raised from the Delivery hubs
  - Delivery hub manager should able to rise tickets to the admin
  - Delivery hub manager should be able to reply the tickets from delivery hubs
  - Delivery hub manager should be able to view the replies from the admin
  - Delivery hub managers should be able to change the status of the tickets [ open / closed ]

# DELIVERY BOY

- **Modules**
  - Login
  - Signup
  - KYC Verification
  - Delivery management
  - Return management
  - Pickup management
  - Ticket management
  - Wallet
  - Settings

- **Signup**
  - Delivery boys should be able to download delivery boy applications from the appstore and playstore. They should be able to sign up by providing the following details.
    - Name
    - Mobile number
    - Email Id
    - Password
    - Confirm Password
    - Email OTP [ Optional ]

- **After signup, He should be able to do KYC Verification.**
  - After successful KYC Verification he should be allotted to a store. To complete the KYC, he should be able to provide
    - Driving Licence
    - Identity card
    - Address proof

- **After KYC, delivery boy should be able to choose the mode of delivery**
  - Bike
  - Car
  - Half Lorry
  - Truck

- **Pickup management**
  - Delivery boy should be notified and view the delivery hub manager assigned Pickups.
  - He should be able to upload pictures to the corresponding pickup with location.
  - He should be able to update pickup and drop status

- **Delivery management**
  - Delivery boy should be able to view the assigned deliveries and should be register pickup and drop by scanning the QR code given in the packing
  - He should be able to upload pictures of the delivered product.
  - He should be able to directly call customers from the delivery dashboard.
  - He should be able to view the location details of the client

- **Return management**
  - Delivery boy should be able to view the assigned Returns and should be register pickup and drop by scanning the QR code given in the packing
  - He should be able to upload pictures of the return product.
  - He should be able to directly call customers from the return dashboard.
  - He should be able to view the location details of the client

- **Ticket management**
  - Delivery boy should be able to rise the tickets
  - They should be able to view the replies to the ticket

- **Wallet**
  - They should be able to view their wallet.
  - After each delivery, Pickup, and return, they should be rewarded with payment in their wallet
  - They should be able to request amount to their bank account
  - They should be able to get the status of the payment
  - They should be able to view their payment history

- **Settings**
  - They should be able to add/change their profile photo.
  - They should be able to add/delete their bank account details
  - They should be able to request their location change, and update on the same.
  - They should be able to change their password with mobile or verification.

- **Freelance Delivery Boy mode**
  - People can Apply for freelance delivery boy positions through the delivery boy application. They can verify their KYC, Vehicle type, Licence image etc..
  - Once the KYC is verified, they will get the list of Deliveries based on the location. He should be able to select according to their convenience.
  - The cost of the delivery will be calculated based on the pickup and drop distance and mode of vehicle
  - Payment will be calculated as per the admin’s settings.
  - Delivery boys should be able to take image while driver collect the goods and can send to the customer
  - Freelance delivery boys can turn on and turn off their availability simply from the homescreen of the application.
  - They will be allotted tasks depending upon the geo location they would like to work.
  - They have the choice of accepting work

- **Delivery Process**
  - User will be notified, if the product is out for delivery
  - When the delivery person reaches the site for delivery, he should contact the person and ask for OTP to verify the delivery.

# HR MANAGER

- **Login**
  - HR manager should be able to login with the preset credentials provided by the admin / Warehouse manager.
  - If need to reset the password, HR manager should request the admin / operations manager

- **Role Management**
  - HR manager should be able to add / edit / delete the employee roles in the system

- **Employee Management**
  - Employee Database: Maintain a centralized database of all employees, including personal details, job roles, contact information, and employment history.
  - Role Assignment: Assign roles (e.g., delivery boy, packing staff, office staff) and permissions based on job responsibilities.
  - Employee Onboarding: Automate the onboarding process for new hires, including document collection.
  - Employee Offboarding: Manage exit processes, including clearance, document retrieval, and final settlements.

- **Attendance and Leave Management**
  - Attendance Tracking: Use manual entry to record employee attendance.
  - Leave Management: Allow employees to apply for leave (casual, sick, annual) and enable managers to approve or reject requests.
  - Overtime Tracking: Track overtime hours and integrate with payroll for compensation.

- **Payroll Management**
  - Salary Calculation: Automate salary calculations based on attendance, overtime, and deductions.
  - Reimbursements: Manage travel, fuel, and other reimbursements for delivery boys and office staff.
  - Tax Compliance: Calculate and deduct taxes as per local regulations.
  - Payslip Generation: Generate and distribute digital payslips to employees.

- **Freelance Delivery Boy Management**
  - Freelance Onboarding: Register and verify freelance delivery boys.
  - Performance Tracking: Monitor delivery performance and ratings.
  - Payment Processing: Handle payments for freelance delivery boys.
  - Compliance: Ensure freelancers adhere to company policies.

- **Recruitment and Hiring**
  - Job Posting: Create and publish job openings for various roles (e.g., delivery boys, packing staff, office staff).
  - Applicant Tracking: Track applications, schedule interviews, and manage candidate communication.
  - Document Verification: Verify candidate documents and background checks.
  - Offer Management: Generate and send offer letters to selected candidates.

# ACCOUNTANT MODULE

- **Login**
  - Accounts manager should be able to login with the preset credentials provided by the admin / Operations manager.
  - If need to reset the password, HR manager should request the admin / operations manager

- **Invoicing and Billing**
  - Invoice Generation: Automatically generate invoices for customer orders and vendor purchases.
  - Customizable Templates: Create and use customizable invoice templates with company branding.
  - Recurring Invoices: Set up recurring invoices for subscription-based services or regular customers.
  - Payment Tracking: Track invoice payments and send reminders for overdue payments.
  - Tax Calculation: Automatically calculate taxes (GST, VAT, etc.) based on regional regulations.

- **Payment Processing Management**
  - Salary Processing sheets
  - Reimbursements: Manage travel, fuel, and other reimbursements for delivery boys and office staff.

- **Expense Management**
  - Expense Tracking: Record and categorize business expenses (e.g., office supplies, travel, fuel).
  - Receipt Management: Upload and store digital receipts for expense claims.
  - Reimbursements: Process reimbursements for employee expenses.

- **Financial Reporting and Analytics**
  - Custom Reports: Generate financial reports (e.g., profit and loss, balance sheet, cash flow).
  - Dashboards: Provide visual dashboards for accountants and finance managers to monitor key financial metrics.
  - Trend Analysis: Analyze financial trends and identify areas for improvement.
  - Data Export: Export financial data for external analysis or compliance purposes.

- **Asset Management**
  - Asset Tracking: Record and track company assets (e.g., vehicles, equipment, office furniture).
  - Depreciation Calculation: Automatically calculate depreciation for assets.
  - Asset Disposal: Manage the disposal or sale of assets.