const dropElmt = document.getElementById("card-box");

const sidebarContent = {
	ul: {
		className: "sidebar__navigation navigation",
		li: {
			className: "navigation__navigation-item navigation-item",
			h3: {
				className: "navigation-item__title",
				valEl: ["Formats", "Blocs", "Eléments"],
			},
			ul: {
				className: "navigation-item__subnavigation subnavigation",
				li: {
					className:
						"subnavigation__subnavigation-item subnavigation-item",
					formats: {
						valEl: ["8,56cm * 5.39cm"],
					},
					zones: {
						valEl: [
							"Zone vide",
							"Zone d'en-tête",
							"Zone de titre",
							"Zone de formulaire",
							"Zone d'identité",
						],
					},
					elements: {
						valEl: [
							"élément texte",
							"élément titre",
							"élément logo",
							"élément photo d'identité",
							"élément signature",
							"élément code-bar",
							"élément code-QR",
						],
					},
				},
			},
		},
	},
};

export const sidebar = () => {
	// Create ul sidebar-navigation
	const sidebarContainer = document.getElementById("sidebar");
	const ul = document.createElement("ul");

	ul.setAttribute("class", sidebarContent.ul.className);
	ul.setAttribute("id", "sidebar-content-box");
	sidebarContainer.appendChild(ul);

	const sidebarSubNavigationContent = (item, navBlock) => {
		if (item === 0 || item === 1 || item === 2) {
			// Create ul subnavigation
			const ul = document.createElement("ul");
			ul.setAttribute("class", sidebarContent.ul.li.ul.className);

			for (let k = 0; k < navBlock.valEl.length; k++) {
				// Create ul subnavigation items
				const subLi = document.createElement("li");
				subLi.setAttribute(
					"class",
					sidebarContent.ul.li.ul.li.className
				);
				let subLiContent = document.createTextNode(navBlock.valEl[k]);
				subLi.appendChild(subLiContent);
				item === 0 ? subLi.setAttribute("id", "format-box") : null;
				ul.appendChild(subLi);
			}
			return ul;
		}
	};

	const sidebarNavigationContent = () => {
		const format = sidebarContent.ul.li.ul.li.formats;
		const zone = sidebarContent.ul.li.ul.li.zones;
		const element = sidebarContent.ul.li.ul.li.elements;

		// Create sidebar navigation content
		for (let i = 0; i < sidebarContent.ul.li.h3.valEl.length; i++) {
			const formatSubLi = sidebarSubNavigationContent(i, format);
			const zoneSubLi = sidebarSubNavigationContent(i, zone);
			const elementSubLi = sidebarSubNavigationContent(i, element);

			// Create li navigation item
			const li = document.createElement("li");

			li.setAttribute("class", sidebarContent.ul.li.className);

			// Create h3 item title
			const h3 = document.createElement("h3");

			h3.setAttribute("class", sidebarContent.ul.li.h3.className);

			let h3Content = document.createTextNode(
				sidebarContent.ul.li.h3.valEl[i]
			);

			h3.appendChild(h3Content);

			// Grant li by h3
			li.appendChild(h3);

			if (i === 0) {
				li.appendChild(formatSubLi);
			} else {
				if (i === 1) {
					li.appendChild(zoneSubLi);
				} else {
					if (i === 2) {
						li.appendChild(elementSubLi);
					}
				}
			}

			ul.appendChild(li);
		}

		console.log(ul);
	};

	sidebarNavigationContent();
};

export const dragElmt = () => {
	const elmts = document.getElementsByClassName("subnavigation-item");
	const format = document.getElementById("format-box");
	const mainPanel = document.getElementById("main-panel");
	const cardBox = document.getElementById("card-box");
	for (let i = 0; i < elmts.length; i++) {
		if (format.id === "format-box") {
			elmts[i].draggable = true;
			mainPanel.addEventListener("dragover", () => {
				mainPanel.style.border = "0.2rem solid green";
				cardBox.style.display = "block";
				console.log("I'm a format");
				setTimeout(() => {
					mainPanel.style.border = "0.1rem solid black";
				}, 1000);
			});

			break;
		}
	}
};
