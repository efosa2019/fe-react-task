# My script.js widget configuration 

$(document).ready(function () {
	$(".color-choose input").on("click", function () {
		var headphonesColor = $(this).attr("data-image")

		$(".active").removeClass("active")
		$(".left-column img[data-image = " + headphonesColor + "]").addClass(
			"active"
		)
		$(this).addClass("active")
	})

	// Widget configuration
	let configuration = {
		attributes: ["red", "blue", "black"],
		placeholder: ".product-color",
		placeholder_text: "Surprise me with the color",
		cart_button: ".cart-btn",
		image: window.location.origin + "/images/black.png",
		select_attribute: function (attr) {},
	}

	function handler() {
		alert("hey")
	}

	$(".cart-btn").click(function (e) {
		e.preventDefault()
		$(`
    <style> 
      .popup-overlay {
        visibility:hidden;
      }
      
      .popup-content {
        visibility:hidden;
      }

      .popup-overlay.active{
        visibility:visible;
      }
        
      .popup-content.active {
        visibility:visible;
      }
    </style>
    <div class="popup-overlay" style="display:flex;justify-content:center;">
      <div class="popup-content" style="background-color: white;
        position: absolute;
        top: 50px;
        width: 1000px;
        height: 80vh;">
        <div class="popup-close" style="display:flex;justify-content:end;"><button>close</button></div>
          <iframe id="myIFrame" src="http://127.0.0.1:3355/demo" style="width: 1000px;
          height: 100%;" frameborder='0' /> 
      </div>
    </div>`).appendTo("body")
		$(".popup, .popup-content").addClass("active")
		$(".popup-close").click(function (e) {
			e.preventDefault()
			$(".popup, .popup-content").removeClass("active")
		})

		let iframe = document.getElementById("myIFrame")
		function clic(id) {
			alert(id)
		}
		iframe.contentDocument.addEventListener("click", clic, false)
		iframe.contentDocument.addEventListener("mouseout", function () {
			$(".popup, .popup-content").removeClass("active")
		})
	})
})
