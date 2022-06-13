import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<>
			<div className="text-2xl">
				<h1>
					<Navbar />
					<Home />
					<Projects />
					<About />
					<Contact />
				</h1>
			</div>

			<div
				id="line-container"
				className="top-1/3 left-0 w-full h-3/5 text-center overflow-hidden fixed -z-10"
			>
				<svg
					viewBox="0 0 918 948"
					fill="none"
					className="absolute -z-100 "
					preserveAspectRatio="xMidYMax meet"
				>
					<path
						d="M576.953 945.704C556.001 942.557 538.118 863.779 533.914 835.357C532.775 825.853 530.365 810.782 529.454 807.458C528.653 804.538 524.678 800.319 512.602 789.574C456.891 727.375 452.647 714.918 445.49 668.394C440.718 635.145 432.081 601.874 427.616 569.472C423.661 530.392 408.867 488.488 403.704 455.373C398.966 435.602 394.751 416.08 390.053 393.589C390.055 393.305 389.688 391.341 389.235 389.226L388.413 385.381L385.9 388.112C384.518 389.614 382.423 392.055 381.243 393.536C377.611 398.096 375.992 396.95 375.063 389.163C374.599 385.277 373.395 379.036 372.387 375.293C370.353 362.962 365.701 349.268 361.71 339.964C361.277 338.957 361.015 337.762 361.127 337.309C361.735 334.855 349.126 311.703 341.812 301.845C328.996 284.57 290.145 257.006 278.612 257.006C272.462 257.006 271.036 263.212 275.738 269.511C305.871 311.833 319.692 311.99 346.875 380.004C350.505 392.815 350.961 394.649 352.337 401.986C344.087 436.579 230.913 446.592 241.907 486.738C246.566 498.61 232.328 492.185 225.756 479.449C200.667 451.243 156.146 441.172 133.287 415.001C128.832 409.637 129.409 402.096 134.99 392.751C137.336 388.823 139.261 385.054 139.267 384.377C139.272 383.699 142.899 378.351 147.325 372.494C157.789 359.432 166.661 345.239 178.097 332.807C193.718 316.16 201.56 296.45 194.516 291.54C187.871 286.908 162.959 291.203 148.533 299.468C131.553 307.917 112.807 322.588 103.441 337.086C101.332 340.54 99.2209 343.837 98.7506 344.413C97.1768 346.34 90.3956 362.412 89.2005 367.048C86.6217 377.052 85.3545 383.358 85.0192 387.855C84.826 390.446 84.0412 393.978 83.2752 395.706C82.5091 397.433 81.6234 399.488 81.3068 400.272C80.1856 403.051 77.3454 399.367 75.9079 393.269C74.4206 386.961 72.8786 382.653 67.6006 370.059C65.7909 365.741 62.3381 356.791 59.9276 350.17C57.3796 337.426 46.1778 325.948 44.8264 313.146C44.7211 311.172 44.6121 311.217 43.8772 313.533C42.4234 318.116 38.8475 316.854 37.2039 311.177C36.3039 307.219 34.6141 300.209 32.6424 296.784C24.8148 282.513 20.5912 258.204 15.5015 245.834C8.46418 229.113 12.2223 222.442 17.3522 211.471C18.8216 208.328 46.3038 183.731 48.3455 183.731C48.941 183.731 50.1656 182.951 51.0667 181.999C56.3881 176.373 92.7072 159.055 109.751 154.016C119.876 149.221 130.417 147.567 140.449 142.96C150.535 139.174 185.813 130.812 181.039 127.117C169.224 109.474 110.001 126.624 95.4546 132.574C80.5721 137.896 66.6885 145.45 54.388 154.466C40.992 164.481 18.6818 186.7 18.6818 190.025C18.6818 190.676 17.2877 193.295 15.5838 195.844C13.88 198.394 12.913 200.48 13.435 200.48C13.957 200.48 13.7396 201.045 12.9516 201.736C12.1637 202.427 11.519 204.272 11.519 205.837C11.519 207.402 11.1928 209.428 10.7944 210.338C9.94545 212.278 6.28885 212.62 7.0799 210.686C7.37412 209.966 7.06581 208.446 6.39578 207.308C3.7242 202.775 -0.488926 183.893 0.991997 183.09C1.53268 182.797 1.51657 181.762 0.9544 180.789C-0.0539385 179.039 0.0355495 163.943 1.12595 151.804C1.68046 145.632 5.72725 129.745 7.79205 125.634C8.37043 124.483 9.84581 121.421 11.0707 118.83C12.2956 116.24 15.8732 111.882 19.0209 109.148C36.8273 96.3713 20.5097 106.659 17.6406 106.659C14.0742 106.659 17.4838 99.8925 20.5085 96.386C21.4725 95.2684 22.2612 93.6039 22.2612 92.687C28.4669 82.3157 33.8531 73.0018 40.948 63.8812C43.6436 60.4308 48.0772 55.6366 49.7186 53.2274C54.465 46.261 75.6504 27.7502 82.9632 24.1798C94.4813 14.7469 109.813 8.63432 123.51 5.37401C146.116 -0.483159 165.229 -0.470446 176.053 0.950877C210.742 3.0436 273.262 48.951 265.949 57.5106C262.24 65.6679 262.495 68.632 249.192 66.6243C242.181 65.0587 220.216 60.258 221.24 61.1555C222.259 62.0495 242.374 66.6701 252.968 71.3737C255.931 72.6892 257.44 76.3466 257.44 82.2014C257.44 89.9591 256.362 90.5652 241.302 91.2741C224.62 92.0594 220.852 93.6328 235.552 93.6756C245.836 93.2243 255.153 97.6263 256.02 106.544C256.354 110.896 253.19 130.044 251.488 133.97C249.802 140.881 245.281 142.528 240.169 145.297C234.474 145.376 199.609 152.171 240.879 147.079C246.875 147.108 247.932 153.615 244.761 170.977C244.479 172.523 243.743 178.027 243.125 183.209C242.507 188.391 241.483 194.514 240.85 196.817C240.216 199.12 238.72 204.89 237.526 209.64C235.414 218.04 235.249 218.292 231.461 218.918C227.702 219.538 224.828 221.417 227.639 221.417C233.058 221.417 235.574 224.777 236.42 237.454C236.676 241.288 233.489 274.919 234.208 276.526C236.427 257.656 240.185 237.355 242.371 219.323C242.764 215.581 243.645 209.222 244.33 205.191C245.014 201.161 245.823 196.215 246.126 194.2C248.119 180.973 249.097 175.196 250.204 170.124C250.895 166.958 251.98 161.069 252.615 157.039C253.249 153.009 254.641 146.179 255.707 141.861C257.418 134.926 259.536 122.076 261.658 105.747C262.032 102.868 262.902 98.6284 263.592 96.3255C264.282 94.0226 265.242 89.312 265.725 85.8576C267.98 69.7201 274.687 68.8348 282.932 83.5861C291.658 99.1993 299.65 114.045 299.933 115.168C300.078 115.743 302.395 120.288 305.082 125.266C307.769 130.245 309.967 134.979 309.967 135.787C309.967 136.594 310.414 137.702 310.96 138.249C311.505 138.796 312.608 141.364 313.409 143.954C314.21 146.545 315.587 150.078 316.469 151.805C317.351 153.532 318.611 156.123 319.27 157.563C319.929 159.002 321.275 161.828 322.262 163.843C325.366 170.184 327.874 177.429 327.874 180.056C327.874 185.19 339.142 194.489 349.959 198.283C350.616 198.513 351.422 199.015 351.75 199.398C363.347 206.174 374.143 214.376 385.555 222.463C394.909 229.078 410.666 247.572 413.444 255.198C422.272 246.048 426.248 238.716 443.971 226.541C450.878 223.2 428.518 200.42 404.277 186.101C390.211 176.833 378.575 171.154 367.421 161.639C366.353 160.715 362.524 158.249 358.913 156.159C347.512 149.562 339.715 144.553 337.224 142.228C335.899 140.99 332.462 139.189 329.586 138.226C324.653 136.575 321.95 132.936 321.912 127.897C321.808 114.197 372.03 135.662 400.797 161.613C404.599 165.043 420.113 176.956 422.016 177.907C423.094 178.446 424.579 179.388 425.317 180.001C426.055 180.614 430.083 183.706 434.268 186.873C438.453 190.039 443.372 193.903 445.198 195.459C450.124 197.852 455.103 203.348 459.789 204.668C462.243 204.668 462.187 204.486 456.982 195.411C452.572 187.723 447.408 175.995 443.12 163.927C442.011 160.807 439.191 154.683 436.854 150.319C430.978 139.349 427.889 133.366 422.758 123.019C408.342 92.2616 388.882 67.7462 361.882 49.7215C341.265 38.1305 319.826 37.9556 304.022 43.2666C300.006 45.4588 289.672 51.7932 289.672 49.8239C292.069 44.0665 298.154 42.7744 302.615 39.9216C320.062 32.3178 345.631 37.0566 365.138 45.6895C380.744 53.5123 390.156 62.8647 398.905 73.8197C401.203 76.6865 403.083 79.2634 403.083 79.546C403.083 79.8287 404.865 82.542 407.041 85.5757C409.218 88.6095 411.856 92.7404 412.902 94.7555C413.948 96.7705 417.242 103.13 420.221 108.887C432.316 129.714 443.851 151.003 451.658 172.218C454.31 181.884 460.716 191.222 464.881 198.711C467.867 204.268 468.94 205.608 473.935 210.023C476.307 212.12 478.114 212.861 479.904 212.473C525.904 213.465 557.593 219.462 567.859 250.015C572.736 257.262 571.72 272.771 565.516 285.794C553.754 316.083 546.504 344.6 539.874 373.918C538.221 380.892 537.156 386.243 536.161 392.567C535.325 397.876 533.415 406.078 532.566 408.007C531.223 411.054 534.063 410.057 535.547 406.96C537.982 401.876 540.57 398.115 556.98 375.818C561.184 370.61 565.111 366.089 569.179 361.686C579.338 350.649 588.534 353.133 588.534 353.133C592.052 356.541 592.228 356.114 577.634 379.482C565.059 395.15 544.417 441.959 534.39 470.552C531.123 480.168 527.674 489.746 525.72 494.628C524.335 498.09 523.487 522.779 524.648 525.846C525.563 528.261 537.712 534.111 548.115 535.325C560.394 536.583 570.001 537.53 579.821 536.763L578.576 533.891C571.097 522.355 571.705 507.325 573.787 495.272C576.975 478.041 578.015 473.042 579.371 468.459C579.796 467.019 580.2 465.371 580.268 464.795C584.625 450.085 591.824 436.117 601.096 423.355C607.133 413.324 620.879 394.74 631.916 394.294C640.937 394.704 642.438 401.41 637.153 417.689C633.251 429.708 631.387 437.355 630.562 444.728C630.164 448.28 629.086 455.426 628.166 460.608C626.229 471.51 626.515 499.696 628.671 510.33C631.473 524.152 640.997 531.778 654.229 530.792C681.165 535.025 712.918 525.872 755.766 556.912C756.65 559.477 760.03 556.443 760.03 553.084C769.805 535.794 849.748 508.661 855.504 488.405C861.029 470.226 847.516 454.057 834.642 443.178C812.253 423.367 788.635 416.685 764.162 405.629C747.781 399.033 719.034 390.769 710.23 381.422C703.809 372.915 710.112 366.303 723.619 367.377C743 370.101 782.001 378.401 799.425 389.538C800.41 390.218 804.814 392.409 809.211 394.406C825.462 401.785 856.613 423.192 880.239 443.216C883.093 445.635 884.1 443.331 885.472 431.252C886.568 421.591 887.453 418.551 891.082 411.969C899.309 397.045 902.021 378.244 896.939 371.357C895.963 370.034 883.761 362.861 882.089 362.627C881.6 362.559 879.857 361.709 878.216 360.74C861.124 352.888 843.247 346.221 826.285 340.853C792.869 329.203 742.616 314.656 710.592 313.068C704.036 312.56 681.156 313.262 680.045 304.857C676.128 296.327 708.359 290.669 718.844 288.927C724.753 287.958 730.931 286.932 732.572 286.649C743.469 284.764 780.059 284.226 798.231 285.683C824.942 287.824 859.881 297.416 877.894 307.552C880.671 309.115 883.31 310.394 883.758 310.394C885.669 310.394 897.253 317.528 903.652 322.645C910.156 327.846 912.853 329.246 912.823 327.404C909.692 319.251 906.724 310.1 903.799 302.746C893.615 279.975 897.002 237.301 853.828 237.281C843.136 235.714 734.358 230.683 687.06 247.656C683.719 249.224 674.866 246.329 673.242 243.137C669.835 236.442 677.838 231.046 704.518 222.046C746.213 209.95 788.897 206.453 827.479 195.81C829.449 195.083 834.015 193.917 837.627 193.218C861.891 188.525 883.972 180.592 872.768 180.592C867.157 180.603 862.462 177.578 857.797 176.044C841.174 169.441 825.927 158.578 813.845 147.984L807.518 142.384L800.911 142.417C795.826 142.434 781.427 145.342 778.144 146.084C757.899 150.663 753.089 151.727 745.704 154.631C735.465 158.657 718.798 165.999 709.293 170.671C704.04 173.253 698.4 175.955 696.758 176.675C693.732 178.002 688.035 180.883 674.151 188.107C665.052 192.842 660.833 193.218 658.562 189.498C655.741 184.875 660.663 184.27 672.776 174.223C680.909 167.477 698.471 159.009 699.366 159.009C714.796 151.755 717.993 151.05 733.313 146.376C739.55 144.478 756.389 141.214 757.045 140.796C758.201 140.06 767.46 138.477 791.068 134.979C797.306 134.055 804.29 132.887 806.588 132.383C808.886 131.879 813.855 131.18 817.63 130.83C824.73 130.173 826.485 128.929 821.809 127.87C794.154 114.583 771.467 91.9759 743.913 84.3918C713.3 76.6175 672.369 78.1082 657.178 87.5507C622.714 105.705 581.271 124.167 573.633 160.702C572.803 165.131 571.943 190.535 572.623 190.535C572.698 190.535 573.029 195.454 573.359 201.466C573.688 207.478 574.459 213.218 575.071 214.221C575.684 215.224 576.184 217.163 576.184 218.53C576.184 221.214 579.558 226.002 579.877 223.771C580.121 222.068 580.4 221.23 581.357 219.322C581.79 218.459 582.652 215.632 583.272 213.041C587.316 196.138 589.308 191.758 603.347 168.663C606.131 164.083 617.458 148.391 618.771 149.543C619.144 149.87 617.773 151.994 615.724 154.262C606.374 169.526 598.223 182.04 594.613 199.957C593.202 207.284 591.609 217.668 591 223.509C590.61 227.252 589.176 233.533 587.814 237.469L585.338 244.624L588.537 250.345C590.709 254.227 592.211 255.811 593.213 255.273C596.544 253.486 605.18 247.431 609.342 243.965C611.788 241.928 614.834 239.964 616.112 239.601C617.389 239.237 621.687 236.735 625.662 234.04C629.637 231.345 634.77 228.232 637.068 227.123C639.366 226.014 642.321 224.323 643.634 223.364C647.033 220.884 703.281 196.908 710.727 194.765C714.142 193.783 718.956 192.076 721.425 190.972C726.531 188.69 729.41 188.387 728.718 190.206C728.292 191.328 716.948 196.023 704.518 200.223C698.423 202.282 665.317 216.31 664.526 217.169C664.197 217.525 659.91 219.922 654.997 222.495C650.085 225.068 640.754 230.941 634.262 235.547C627.769 240.153 620.97 244.874 619.152 246.037C617.335 247.201 613.862 250.263 611.435 252.842C609.008 255.42 606.036 258.549 604.832 259.796C601.865 262.865 600.06 265.949 600.06 267.952C600.06 269.322 608.908 287.096 610.118 288.157C610.32 288.334 614.827 286.579 620.133 284.257C636.594 278.157 653.21 272.019 668.819 270.058C693.482 266.132 720.852 262.327 739.465 262.23C752.12 262.185 762.926 262.393 763.478 262.692C764.029 262.991 770.031 263.48 776.814 263.78C787.946 264.271 793.001 265.358 790.277 266.674C789.727 266.94 784.98 266.833 779.727 266.436C763.948 265.154 745.856 266.178 731.378 265.753C702.376 267.488 673.921 270.277 647.035 280.641C635.751 283.718 624.381 288.71 616.654 294.5C615.435 295.416 614.836 296.422 615.325 296.736C615.814 297.051 618.282 300.841 620.811 305.159C636.822 332.496 636.909 332.547 668.704 333.028C683.652 333.344 748.123 337.761 759.676 342.184C762.395 344.568 757.198 345.228 749.004 343.539C723.632 339.952 700.366 337.539 674.076 337.45C664.554 337.446 649.393 339.057 648.028 340.221C646.468 341.551 659.512 362.047 669.834 374.486C685.215 393.858 700.738 414.389 711.435 432.867C718.293 447.335 736.589 474.862 737.024 489.735C731.986 484.924 728.592 475.041 726.701 468.889C710.987 437.553 689.263 402.721 669.736 379.929C667.855 377.777 665.242 374.477 663.929 372.596C661.791 369.534 648.229 353.573 646.652 352.264C639.258 346.125 640.139 336.562 648.098 336.562C649.473 336.562 677.518 335.85 677.106 335.488C676.694 335.127 646.664 335.291 643.688 335.343C630.477 331.851 632.905 332.642 610.805 299.231C610.805 296.798 607.182 290.242 597.748 275.597C592.607 267.617 593.262 263.221 600.433 257.575C608.956 250.866 619.029 242.351 618.442 242.351C614.759 242.351 594.091 259.179 594.091 262.177C594.091 267.992 588.432 262.82 582.79 251.85C580.75 247.882 580.677 246.916 582.086 242.532C583.344 230.652 596.676 197.764 587.675 209.973C586.191 211.398 583.638 220.933 582.669 228.677C581.837 235.327 577.263 236.039 575.527 229.79C575.447 229.502 575.077 228.56 574.706 227.696C570.991 219.062 568.806 202.831 568.647 182.684C568.53 167.753 569.139 162.388 571.976 153.374C572.067 153.086 572.578 151.202 573.113 149.187C575.515 140.136 591.392 121.355 602.982 113.855C636.181 91.3631 683.104 66.1327 724.812 75.8648C750.216 79.6919 781.759 94.8832 802.882 112.327C838.972 138.949 846.737 126.262 808.996 137.393C804.188 140.763 852.954 171.7 866.875 174.395C880.078 176.95 881.371 175.858 890.484 172.825C904.877 168.036 906.106 168.428 896.421 176.494C889.221 182.491 872.057 190.257 859.712 193.105C854.459 194.316 848.55 195.724 846.58 196.234C833.279 199.673 829.083 200.619 822.893 201.574C819.057 202.165 812.879 203.367 809.164 204.244C805.449 205.121 797.037 206.516 790.471 207.343C760.093 212.41 778.866 209.083 724.216 220.076C712.798 221.348 688.636 230.704 683.485 235.848C676.37 242.954 682.9 243.793 709.293 239.167C718.219 237.602 720.89 237.509 733.213 235.691C764.283 231.587 816.239 229.743 855.21 233.468C857.329 233.659 861.896 234.522 865.357 235.387C868.818 236.251 873.95 237.488 876.76 238.134C887.06 242.108 889.474 246.612 893.573 253.394C894.547 254.334 897.167 262.388 897.982 266.95C898.188 268.102 898.996 271.87 899.777 275.325C902.855 288.507 907.943 302.836 912.878 313.009C913.466 314.16 914.431 317.458 915.022 320.336C915.613 323.215 916.232 326.042 916.398 326.617C918.78 334.877 917.431 345.695 914.274 338.976C875.281 297.511 804.105 283.443 745.107 289.028C724.427 292.287 710.135 294.223 691.753 299.557C680.045 304.857 687.604 305.925 689.215 307.337C689.795 307.845 697.236 308.746 705.75 309.337C726.508 310.444 742.625 314.892 761.223 318.737C779.407 322.49 802.601 329.105 824.129 336.676C832.135 339.492 839.577 341.796 840.666 341.796C852.775 345.909 864.943 351.137 873.678 354.187C882.462 357.25 898.009 364.109 900.095 365.842C901.128 366.7 902.968 372.539 903.899 377.91C905.248 385.694 905.06 386.811 899.717 402.76C898.995 404.912 897.366 408.681 896.096 411.134C891.846 420.964 890.412 421.698 890.176 441.764C888.751 451.933 886.928 450.859 886.71 454.587C886.503 458.123 883.668 457.42 882.02 453.424C880.143 448.873 870.449 439.195 860.305 431.745C855.897 428.508 850.3 424.272 847.867 422.33C830.594 409.344 811.984 399.807 798.828 393.105C777.28 383.087 753.391 374.001 729.588 371.752C726.961 371.52 724.275 371.189 723.619 371.018C717.332 369.38 710.562 375.459 713.819 379.818C728.068 390.169 756.861 400.428 771.371 404.604C808.482 415.809 880.379 460.837 857.35 494.103C850.269 516.671 770.993 530.4 763.617 562.118C761.577 580.113 756.756 570.722 749.753 559.608C744.561 549.705 715.253 539.483 705.115 537.942C697.191 537.139 671.055 535.483 657.424 534.92C637.448 534.096 631.04 529.766 625.121 513.092C619.321 496.755 626.02 427.647 634.855 412.667C634.122 362.741 580.268 464.795 580.28 482.065C579.973 484.656 579.182 488.795 578.522 491.262C576.895 507.866 573.359 525.895 588.259 538.204C596.469 542.602 546.105 543.101 528.884 534.191L524.992 532.178C527.302 619.988 525.623 710.968 532.466 793.277C534.818 806.756 541.937 807.992 550.941 814.682C567.319 828.224 651.611 878.494 631.514 914.118C611.464 937.228 602.773 951.728 576.951 945.704L576.953 945.704ZM599.033 934.591C615.852 924.924 625.775 910.409 624.854 900.195C624.392 895.071 619.1 883.685 615.153 879.322C599.186 857.41 576.735 843.595 556.984 827.231C549.817 822.785 543.296 815.15 536.352 811.907C535.249 813.06 540.261 842.594 542.819 850.012C547.718 871.889 554.725 892.862 560.17 909.36C571.326 934.077 582.176 944.281 599.033 934.591V934.591ZM527.75 794.931C527.296 794.287 526.749 782.629 526.535 769.023C522.054 663.138 522.522 630.644 520.278 566.515C517.628 536.54 516.597 519.381 517.826 502.478C515.515 502.068 526.266 436.24 523.985 439.147C523.611 440.011 521.993 443.255 520.388 446.357C510.838 464.816 505.329 511.09 511.211 523.435C513.363 527.951 513.352 529.09 511.145 529.832C508.982 530.56 494.626 521.846 489.636 516.776C481.161 508.164 466.699 496.642 463.372 495.851L459.791 495L459.8 485.486C459.805 480.254 459.403 476.194 458.905 476.464C458.407 476.734 457.999 477.718 457.999 478.651C457.999 480.294 456.373 485.349 454.291 490.178C452.835 493.554 449.666 493.204 449.543 489.655C449.489 488.072 449.259 485.834 449.033 484.683C448.806 483.531 448.351 481.176 448.02 479.449C447.69 477.721 447.338 476.308 447.239 476.308C447.14 476.308 446.815 474.895 446.517 473.168C445.092 464.9 440.75 454.954 433.953 444.381C422.383 428.161 415.343 408.727 404.497 392.565C403.693 391.414 401.76 387.662 400.201 384.228C396.955 377.073 395.632 376.251 393.011 379.758C397.989 409.91 404.43 429.507 407.339 453.802C430.695 535.631 437.976 623.58 458.056 702.938C476.099 748.209 535.631 807.011 527.749 794.931H527.75ZM505.162 510.591C505.171 492.748 506.145 473.602 507.067 473.102C507.505 472.865 508.241 470.427 508.702 467.685C509.163 464.943 510.257 461.287 511.132 459.56C512.008 457.832 513.09 455.242 513.536 453.802C513.982 452.363 516.251 446.71 518.578 441.241C520.905 435.771 523.782 429.005 524.972 426.204C526.162 423.403 527.239 418.692 527.367 415.736C527.495 412.78 527.92 409.89 528.311 409.314C530.534 399.847 533.425 389.423 534.829 380.514C535.183 377.93 536.039 374.171 536.729 372.16C538.34 363.561 540.178 354.592 542.29 347.42C544.658 339.433 546.606 331.83 546.618 330.524C553.373 295.266 580.669 256.712 551.387 235.62C543.291 219.705 481.403 209.704 459.492 221.443C451.975 225.552 452.012 223.694 459.194 236.273C476.874 261.632 430.421 314.149 428.627 307.181C428.014 299.545 422.045 281.063 419.112 275.248C417.52 272.091 416.217 268.843 416.217 268.029C416.217 262.583 410.388 269.559 406.016 280.238C404.503 283.933 404.593 284.28 408.059 288.089C418.902 300.003 432.691 322.418 430.439 324.472C427.075 340.375 418.022 356.467 405.91 368.007C399.65 373.876 399.94 377.391 407.724 389.948C408.259 390.812 410.432 394.58 412.553 398.323C416.529 405.338 417.78 407.474 419.753 410.622C425.872 421.358 431.6 431.928 438.357 442.811C441.943 448.568 445.201 453.986 445.597 454.849C447.456 458.166 450.628 463.056 452.031 470.613C452.619 477.095 454.233 473.286 455.547 464.532C457.323 452.692 460.238 437.388 461.478 433.39C464.219 424.555 465.519 420.635 466.337 418.735C468.937 412.697 473.166 404.679 475.575 401.222C477.071 399.075 478.295 396.869 478.295 396.321C486.413 379.742 495.433 365.451 505.411 349.823C519.604 327.604 547.076 311.608 545.282 326.607C544.856 330.172 535.584 346.166 525.836 360.156C509.678 388.862 480.154 417.282 471.105 452.756C470.316 455.922 468.977 460.633 468.129 463.223C463.232 478.175 462.231 489.049 465.536 491.371C466.856 492.298 470.986 495.464 474.715 498.407C478.443 501.349 482.28 504.175 483.243 504.687C484.205 505.199 486.574 507.496 488.508 509.79C492.147 514.108 496.707 517.898 502.058 521.052C503.762 522.055 505.155 522.88 505.155 522.884C505.155 522.888 505.159 517.356 505.165 510.591H505.162ZM527.753 477.667C535.889 456.67 549.167 414.708 571.515 383.068C572.082 382.45 574.767 378.211 577.48 373.647C580.194 369.083 582.788 364.878 583.245 364.302C589.588 356.311 584.536 353.11 576.389 359.957C563.142 373.918 552.044 386.305 543.263 400.896C541.898 403.223 539.03 407.953 536.89 411.407C531.418 420.24 529.904 424.773 529.024 434.96C526.87 442.689 523.924 484.908 524.647 484.794C525.19 484.5 526.588 481.293 527.753 477.667V477.667ZM236.498 474.218C238.885 463.868 244.035 461.988 251.337 456.938C276.821 434.62 325.613 434.091 344.402 406.829L347.2 402.239L344.705 392.691C343.333 387.44 341.663 380.567 340.993 377.417C337.79 369.952 330.052 342.226 286.71 291.1C281.843 286.771 272.914 275.742 268.431 268.521C261.625 257.557 275.155 246.928 287.179 253.794C288.761 254.697 292.252 256.519 294.938 257.843C302.425 261.532 312.45 268.502 327.936 280.785C331.652 283.732 334.722 286.825 339.154 292.085C353.306 310.113 367.939 337.596 372.71 359.591C374.418 368.231 374.781 369.59 375.643 370.583C376.143 371.158 376.943 373.706 377.42 376.243C377.898 378.781 378.951 382.237 379.76 383.924L381.23 386.991L383.677 383.603C385.549 381.01 385.874 379.576 385.061 377.492C384.476 375.995 383.502 371.944 382.896 368.489C381.939 363.037 377.944 349.662 375.86 344.936C375.479 344.073 375.101 342.895 375.02 342.319C374.569 339.116 372.747 333.593 371.351 331.195C365.689 307.656 352.915 280.255 349.364 258.481C349.364 257.745 348.743 255.816 347.984 254.196C347.225 252.575 346.712 250.472 346.845 249.523C345.577 238.951 325.046 220.065 319.414 215.509C317.174 213.7 313.461 210.211 311.163 207.757C308.865 205.303 306.417 202.779 305.724 202.149C297.483 194.659 302.32 186.55 315.718 185.392C323.618 184.71 324.294 184.462 324.294 182.251C324.294 178.308 309.169 144.315 298.636 124.588C296.484 120.557 293.747 114.905 292.552 112.026C290.264 106.508 276.882 86.1034 275.162 85.5075C274.608 85.3154 274.155 84.2835 274.155 83.214C274.155 80.0023 271.893 79.7968 271.083 82.935C270.668 84.5418 269.367 88.9183 268.191 92.6606C267.015 96.4029 265.168 105.824 264.086 113.596C263.004 121.369 261.609 130.083 260.985 132.962C257.99 146.792 256.283 155.399 255.588 160.178C255.169 163.057 254.099 168.003 253.21 171.17C252.32 174.336 251.026 181.829 250.333 187.821C249.64 193.812 248.303 203.469 247.362 209.28C245.853 218.606 245.232 222.725 243.793 232.974C243.165 237.444 241.732 245.914 241.144 248.632C240.416 263.012 238.205 274.951 237.656 287.596C237.335 295.24 236.832 302.201 236.538 303.065C236.245 303.929 235.735 308.875 235.406 314.056C235.076 319.238 234.428 327.717 233.965 332.898C233.503 338.08 233.166 342.555 233.218 342.843C233.269 343.131 233.709 350.903 234.196 360.115C235.818 390.783 235.538 397.562 232.67 397.075C229.764 396.581 228.049 284.789 230.645 264.968C233.026 246.779 233.016 231.332 230.621 228.127C227.463 223.901 213.944 226.32 199.542 233.688C196.916 235.032 192.484 237.043 189.693 238.157C186.903 239.271 180.188 242.627 174.771 245.613C164.553 251.246 151.172 258.518 146.997 260.705C145.674 261.399 141.677 264.147 138.115 266.814C133.15 270.326 127.389 273.627 123.455 276.875C101.87 288.592 121.662 273.851 126.123 270.757C130.391 267.806 136.3 263.704 139.255 261.643C142.21 259.581 147.313 256.37 150.596 254.506C153.879 252.643 163.012 247.342 170.891 242.726C178.77 238.111 187.365 233.378 189.992 232.208C192.618 231.039 200.563 227.426 207.647 224.179C214.732 220.932 221.323 218.275 222.295 218.275C224.373 218.275 233.557 213.367 233.583 212.243C233.593 211.818 234.739 206.289 236.13 199.956C238.905 187.315 239.503 183.598 242.59 159.815C243.608 151.972 241.154 151.273 230.84 151.616C171.641 162.668 121.927 167.14 76.636 201.668C72.6556 204.94 71.7421 205.224 70.5669 203.557C69.727 202.365 77.5788 195.743 81.0911 194.681C82.2587 194.328 87.5423 191.484 92.8323 188.362C128.189 169.495 168.288 156.466 204.317 149.279C210.883 147.976 220.349 145.774 225.353 144.385C235.224 142.413 246.882 139.181 248.576 129.831C250.621 121.554 251.437 112.33 251.775 105.278C248.402 98.8703 235.441 97.6721 228.79 97.3659C206.988 96.3692 183.53 93.6129 146.889 99.0226C143.675 99.6394 136.48 100.599 130.899 101.155C115.026 103.561 97.4111 107.418 84.3521 113.167C80.6098 114.883 77.5835 115.632 76.2793 115.165C72.0248 113.641 99.6343 103.872 111.798 102.597C143.613 95.4368 179.279 91.6067 209.689 90.6191C223.419 89.01 252.324 88.8444 252.647 82.4545C252.968 71.3737 207.375 59.2153 195.96 57.0565C192.021 56.37 187.723 55.4086 186.41 54.92C184.329 54.1459 177.887 52.312 172.148 51.897C179.365 51.1319 189.105 51.483 192.976 52.3044C196.587 53.0884 202.163 54.0483 205.368 54.4376C208.572 54.8271 212.332 55.5336 213.724 56.0079C215.116 56.4822 219.478 57.4399 223.418 58.136C227.357 58.8322 232.998 60.0382 235.952 60.8162C252.423 65.1527 263.793 63.4714 261.288 57.0699C258.528 44.6884 224.919 22.1012 200.735 12.1029C198.923 10.8659 188.139 7.96109 183.425 7.43975C171.242 4.79529 159.078 3.61028 147.014 4.68278C123.937 6.66949 103.557 12.8565 92.0041 21.3825C89.9818 22.875 85.9578 25.7448 83.062 27.7598C74.1234 33.9797 59.2745 46.8616 54.7064 52.3593C49.2198 57.4201 46.4353 63.6457 42.609 68.8332C14.2427 106.11 22.3244 102.57 32.1384 95.801C36.5333 94.2662 39.3519 91.3157 42.9544 89.7197C66.3117 75.8924 109.662 57.2854 135.076 67.9146C138.653 69.0361 144.432 71.0027 142.172 74.5077C140.246 77.1845 126.086 83.2396 121.752 83.2396C119.624 83.2396 115.306 83.69 112.154 84.2404C93.8107 85.9408 75.5824 91.5098 58.0762 95.2882C45.3952 98.5716 29.1932 102.511 19.1632 114.031C13.9601 121.262 13.1006 122.709 11.3402 127.205C7.30659 137.505 6.62086 139.793 7.28445 140.734C7.66468 141.274 7.50018 141.973 6.91973 142.287C2.77518 144.533 3.69271 196.293 7.87712 196.293C8.9655 196.293 15.0996 188.417 15.0996 187.02C15.0996 185.67 24.2326 175.543 32.4122 167.823C38.5113 162.067 42.4699 158.819 56.8826 147.749C63.1781 142.914 83.9345 131.617 87.9147 130.86C111.224 123.028 139.952 110.845 178.035 117.209C187.026 119.689 192.997 126.815 187.604 128.63C186.619 128.961 185.813 129.943 185.813 130.812C179.207 137.735 149.736 142.923 138.171 147.998C118.471 154.118 101.349 160.673 84.34 168.252C76.7892 171.612 70.0741 174.944 69.4175 175.657C68.7609 176.37 66.8807 177.532 65.2392 178.241C54.0277 183.08 25.7366 205.994 21.2226 213.892C17.137 221.04 17.0715 236.703 21.0924 244.968C21.6526 246.12 22.9947 250.83 24.0749 255.436C25.9558 267.581 30.5342 279.968 34.2605 290.357C42.6455 321.7 43.2676 283.431 51.3483 268.521C60.3044 252.369 64.5567 246.313 71.0751 240.428C98.3607 217.568 173.329 170.313 198.438 189.053C204.048 194.489 194.1 207.911 179.508 214.594C177.395 215.561 173.517 217.482 170.89 218.862C129.901 238.461 86.5104 267.173 61.0607 297.186C59.7475 298.806 57.194 301.616 55.3863 303.43C53.5785 305.244 51.4952 307.362 50.7567 308.137C48.87 319.749 72.5624 370.353 76.8284 377.642L80.381 383.653L81.8378 377.642C83.5637 370.519 87.4173 359.287 89.6468 354.881C103.734 327.04 119.963 309.527 140.448 300.059C146.206 296.214 153.347 293.743 158.92 291.487C167.868 287.855 176.819 285.298 180.64 285.281C207.985 281.176 204.06 306.31 196.825 315.164C195.331 316.858 191.627 321.541 188.594 325.571C185.561 329.601 182.755 333.134 182.357 333.422C168.157 349.12 138.741 388.379 136.667 403.458C136.447 408.374 141.885 416.496 148.434 421.031C164.508 436.208 222.864 461.348 231.158 476.514C234.064 482.275 235.433 481.687 236.497 474.218L236.498 474.218ZM466.851 454.784C475.423 424.461 498.392 392.827 517.865 365.654C532.586 345.261 536.528 338.535 537.534 332.101C530.702 310.408 486.207 387.536 484.96 390.995C485.402 390.995 480.26 400.378 473.275 412.314C468.768 420.017 463.366 442.405 460.992 463.223C460.565 466.966 459.95 470.852 459.624 471.859C459.299 472.867 459.606 473.691 460.307 473.691C462.438 467.926 465.449 459.861 466.851 454.784ZM392.681 365.451C390.535 358.853 389.454 329.055 391.193 324.417C392.71 316.563 394.02 308.491 395.273 300.971C396.028 296.191 397.869 290.248 399.502 287.325C399.092 268.797 347.97 241.346 348.075 241.604C348.629 242.878 350.013 247.69 351.15 252.296C357.758 275.851 364.839 300.512 372.797 320.86C374.827 326.038 381.106 346.915 382.871 354.358C384.192 359.928 387.3 369.525 388.962 373.169L390.142 375.756L392.28 373.271C394.244 370.987 394.277 370.357 392.681 365.451H392.681ZM405.738 361.504C407.562 359.965 409.054 358.414 409.054 358.058C409.054 357.702 410.114 356.413 411.408 355.195C419.882 344.063 422.673 333.663 425.989 321.194L421.684 313.698C416.869 305.315 410.093 295.67 405.89 291.219L403.106 288.271L402.055 290.696C393.572 320.368 394.053 345.391 396.291 363.404C396.745 363.802 397.117 365.064 397.117 366.209C397.117 368.534 397.933 368.088 405.738 361.504H405.738ZM48.3858 304.735C51.2342 301.73 53.4334 298.258 55.988 295.785C58.7785 293.101 64.0163 287.875 67.6275 284.171C86.981 265.407 107.065 248.824 131.019 235.547C142.122 229.017 154.664 222.65 164.325 217.97C183.145 208.868 198.114 196.355 195.153 192.198C190.768 186.042 165.717 189.473 144.463 199.142C88.8937 226.793 43.6221 257.982 44.9452 308.822C45.4469 307.671 46.9951 305.831 48.3858 304.735V304.735ZM456.229 238.866C448.922 225.892 449.085 225.917 438.061 236.07C431.997 238.376 424.821 248.906 417.416 259.878C415.175 259.878 417.407 262.434 421.433 269.93C425.433 277.38 429.947 290.857 429.947 290.857L433.276 298.955C444.245 288.57 463.445 266.907 456.229 238.866ZM405.51 250.726C392.662 235.771 369.105 210.468 353.601 204.667C352.831 204.667 351.118 203.782 349.794 202.7C342.1 196.414 331.969 192.726 333.018 196.592C337.626 213.561 345.048 231.467 348.629 234.255C350.675 235.848 355.263 239.381 358.825 242.106C362.388 244.832 372.474 253.303 381.24 260.932C384.872 261.77 401.779 279.977 401.923 280.036C408.513 272.803 413.812 258.016 405.51 250.726V250.726ZM335.578 215.575C331.096 203.453 331.106 203.482 329.665 196.472C328.446 190.537 320.714 188.216 310.307 190.663C302.265 194.639 317.539 208.63 321.425 212.002C325.757 215.74 331.532 220.732 334.259 223.095C340.589 228.58 340.523 228.954 335.578 215.575ZM456.036 219.534C458.758 217.924 461.925 216.29 463.074 215.903C466.253 214.834 465.625 213.705 460.29 210.896C457.61 209.485 448.283 202.913 439.562 196.293C430.842 189.672 418.284 180.133 411.655 175.095C407.008 170.271 399.09 167.361 394.638 163.202C393.047 161.699 388.59 158.58 384.734 156.272C380.878 153.964 374.879 149.895 371.401 147.229C353.727 133.681 330.263 124.333 330.263 130.84C330.263 132.793 341.657 141.697 353.271 148.819C375.893 165.409 402.519 179.264 423.131 195.255C425.95 197.478 429.865 199.916 431.833 200.673C438.463 206.009 444.527 213.415 449.031 220.55C450.513 222.955 450.172 223.005 456.036 219.534V219.534ZM677.659 180.641C678.812 179.534 741.038 149.479 755.786 147.206C853.034 132.218 812.51 127.291 726.249 152.027C706.861 159.551 672.776 174.223 665.721 185.927C665.721 186.812 675.952 182.281 677.659 180.641ZM58.5889 91.7346C76.9116 87.553 98.0896 81.7839 115.199 80.536C123.794 80.0084 136.25 76.1761 136.25 74.1205C125.762 60.071 86.4618 71.6944 63.7585 82.6474C62.8124 82.6474 41.1728 95.2252 40.767 95.8009C41.4822 96.6689 56.131 92.7558 58.5889 91.7346Z"
						fill="#D4D4D4"
					/>
				</svg>
			</div>
		</>
	);
}

export default App;
