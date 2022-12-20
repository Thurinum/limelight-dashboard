class Main {
	constructor() {
		this.init();
	}

	init() {
		document.documentElement.classList.add('has-js');

		// initialize contributors
		const list_contributors = document.querySelector("#contributors");
		const list_contributors_small = document.querySelector("#contributors_small");

		fetch("assets/contributors.json")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);

				let count = 0;

				data.forEach((contributor) => {
					const template = `
						<div class="list-item contributor-item">
							<span class="left">
								<img class="profile" src="assets/images/contributors/${contributor.firstName.toLowerCase()}.webp" alt="Image du contributeur ${contributor.firstName} ${contributor.lastName}" />
								<span class="name-and-plan">
									<b>${contributor.firstName} ${contributor.lastName}</b>
									<span class="plan-${contributor.tier.toLowerCase()}">${contributor.tier}</span>
								</span>
							</span>
							<span class="right">
								<span class="price"><b>${contributor.transaction.value}</b> $</span>
								<em class="date">${contributor.transaction.date}</em>
								<img class="status" src="assets/icons/contributions/status/${contributor.transaction.status}.svg" alt="Status de la transaction" />
							</span>
						</div>
						`;

					if (list_contributors)
						list_contributors.innerHTML += template;

					if (list_contributors_small && count < 5) {
						list_contributors_small.innerHTML += template;
						count++;
					}

				});
			});

		// initialize contreparties
		const list_tiers = document.querySelector("#tiers");

		fetch("assets/tiers.json")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);

				data.forEach((tier) => {
					list_tiers.innerHTML +=
						`
						<div class="list-item tier-item">
							<span class="left">
								<img class="image" src="assets/images/tiers/${tier.name.toLowerCase()}.webp" alt="Image de la contrepartie" />
								<span class="name">${tier.name}</span>
								<span class="value">${tier.value ? tier.value + ' $' : ''}</span>
								${tier.isFavorite ? '<img class="favorite" src="assets/icons/tiers/favorite.svg" alt="Cette contrepartie est favorie" title="Cette contrepartie est favorie" />' : ''}
							</span>
							<span class="right">
								<span class="quantity">${tier.quantity}</span>
							</span>
						</div>
						`
				});
			});
	}
}

new Main();
