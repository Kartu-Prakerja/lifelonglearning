$(document).ready(function(){

(function () {
    // Fake loading.
    setTimeout(init, 1000);

    function init() {
        document.body.classList.remove("loading");

        //************************ Example 1 - reveal on load ********************************

        var rev1 = new RevealFx(document.querySelector("#rev-1"), {
            revealSettings: {
                bgcolor: "#F05E00",
                onCover: function (contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                },
            },
        });
        rev1.reveal();

        var rev2 = new RevealFx(document.querySelector("#rev-2"), {
            revealSettings: {
                bgcolor: "#F2BA01",
                delay: 250,
                onCover: function (contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                },
            },
        });
        rev2.reveal();

        var revVideo = new RevealFx(document.querySelector("#revVideo"), {
            revealSettings: {
                bgcolor: "#083D62",
                delay: 550,
                direction: "rl",
                onCover: function (contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                },
            },
        });
        revVideo.reveal();
    }

    var modalEl = document.querySelector('.reveal-modal'),
				revealer = new RevealFx(modalEl),
				deleteCtrl = modalEl.querySelector('.btn--default'),
				closeCtrl = modalEl.querySelector('.btn--reveal-modal-close');

			document.querySelector('.btn--reveal-modal-open').addEventListener('click', function() {
				modalEl.classList.add('reveal-modal--open');
				revealer.reveal({
					bgcolor: '#f2ba01',
					direction: 'tb',
					duration: 400, 
					easing: 'easeOutCirc',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 1;
					},
					onComplete: function() {
						closeCtrl.addEventListener('click', closeModal);
						deleteCtrl.addEventListener('click', closeModal);
					}
				});
			});

			function closeModal(ev) {
				closeCtrl.removeEventListener('click', closeModal);
				deleteCtrl.removeEventListener('click', closeModal);
				modalEl.classList.remove('reveal-modal--open');
				revealer.reveal({
					bgcolor: ev.target.classList.contains('btn--reveal-modal-close') ? '#F05E00' : '#F05E00',
					direction: 'bt',
					duration: ev.target.classList.contains('btn--reveal-modal-close') ? 200 : 400, 
					easing: 'easeOutCirc',
					onCover: function(contentEl, revealerEl) {
						contentEl.style.opacity = 0;
					},
					onComplete: function() {
						modalEl.classList.remove('reveal-modal--open');
					}
				});
			}
})();

});