const produtosJSON = [
  {
    "id": "1",
    "nome": "Smart TV Samsung 55” 4K UHD",
    "marca": "Samsung",
    "modelo": "TU8000",
    "descricao": "Smart TV de 55 polegadas com resolução 4K UHD, tecnologia HDR e assistente de voz integrado.",
    "preco": 75000.00,
    "estoque": 30,
    "categoria": "Eletrônicos",
    "garantia": "2 anos",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "3 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9734;",
    "image_poster": "/assets/software/smart-tv-samsung-55.png",
    "update": "Há 30 minutos"
  },
  {
    "id": "2",
    "nome": "Computador HP All-in-One",
    "marca": "HP",
    "modelo": "24-cb1037nh",
    "descricao": "Computador All-in-One com processador Intel Core i5, 8GB RAM, SSD 512GB e tela Full HD de 24 polegadas.",
    "preco": 89000.00,
    "estoque": 15,
    "categoria": "Eletrônicos",
    "garantia": "1 ano",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "2 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9734;",
    "image_poster": "/assets/software/hp-all-in-one-desktop-22-intel-celeron.jpg",
    "update": "Há 1 hora"
  },
  {
    "id": "3",
    "nome": "Camisa Social Masculina",
    "marca": "Pierre Cardin",
    "modelo": "Classic Fit",
    "descricao": "Camisa social masculina de algodão premium, ideal para eventos formais e trabalho.",
    "preco": 3200.00,
    "estoque": 50,
    "categoria": "Roupas",
    "garantia": "Sem garantia",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "1 dia útil",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/61N5qtvSh7L._AC_UL210_SR210,210_.jpg",
    "update": "Há 45 minutos"
  },
  {
    "id": "4",
    "nome": "Frigorífico LG 260L",
    "marca": "LG",
    "modelo": "GC-B369NQZB",
    "descricao": "Frigorífico de 260 litros, design moderno, tecnologia de economia de energia e baixo ruído.",
    "preco": 54000.00,
    "estoque": 20,
    "categoria": "Equipamento Elétrico",
    "garantia": "2 anos",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "4 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/LG-260L-Smart-Inverter-Refrigerator-Shiny-Steel.png",
    "update": "Há 2 horas"
  },
  {
    "id": "5",
    "nome": "Micro-ondas Panasonic 32L",
    "marca": "Panasonic",
    "modelo": "NN-ST67JS",
    "descricao": "Micro-ondas com capacidade de 32 litros, potência de 1100W e tecnologia Inverter.",
    "preco": 21000.00,
    "estoque": 40,
    "categoria": "Equipamento Elétrico",
    "garantia": "1 ano",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "3 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/1121127_micro-ondas-panasonic-style.png",
    "update": "Há 1 hora e 30 minutos"
  },
  {
    "id": "6",
    "nome": "Tênis Adidas Running",
    "marca": "Adidas",
    "modelo": "Ultraboost 22",
    "descricao": "Tênis esportivo de alta performance para corrida, com amortecimento responsivo e cabedal respirável.",
    "preco": 9500.00,
    "estoque": 70,
    "categoria": "Roupas",
    "garantia": "Sem garantia",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "2 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9734;",
    "image_poster": "/assets/software/tenis_adidas_esportivo_galaxy_5_preto_com_branco_para_corrida_oficial.png",
    "update": "Há 15 minutos"
  },
  {
    "id": "7",
    "nome": "Celular iPhone 13 Pro Max 128GB",
    "marca": "Apple",
    "modelo": "iPhone 13 Pro Max",
    "descricao": "Celular Apple com chip A15 Bionic, câmera tripla de 12MP e tela Super Retina XDR de 6.7 polegadas.",
    "preco": 145000.00,
    "estoque": 25,
    "categoria": "Eletrônicos",
    "garantia": "1 ano",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "2 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/-860283737.jpg",
    "update": "Há 10 minutos"
  },
  {
    "id": "8",
    "nome": "Notebook Dell Inspiron 15",
    "marca": "Dell",
    "modelo": "Inspiron 3501",
    "descricao": "Notebook Dell com Intel Core i7, 16GB RAM, SSD 512GB e tela Full HD de 15.6 polegadas.",
    "preco": 98000.00,
    "estoque": 10,
    "categoria": "Eletrônicos",
    "garantia": "2 anos",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "3 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9734;",
    "image_poster": "/assets/software/61SDITIPUqL.jpg",
    "update": "Há 20 minutos"
  },
  {
    "id": "9",
    "nome": "Relógio Smartwatch Xiaomi Mi Band 7",
    "marca": "Xiaomi",
    "modelo": "Mi Band 7",
    "descricao": "Relógio fitness com monitor de batimentos, oxigenação do sangue e resistência à água.",
    "preco": 6500.00,
    "estoque": 100,
    "categoria": "Acessórios",
    "garantia": "6 meses",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "1 dia útil",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/e93db8edc6160d9525bb730241ff8214-82887a160d237da3fe16775924654845-1024-1024.png",
    "update": "Há 35 minutos"
  },
  {
    "id": "10",
    "nome": "Fone de Ouvido Bluetooth JBL Tune 510BT",
    "marca": "JBL",
    "modelo": "Tune 510BT",
    "descricao": "Fone de ouvido sem fio com graves potentes e bateria de longa duração.",
    "preco": 8200.00,
    "estoque": 80,
    "categoria": "Acessórios",
    "garantia": "1 ano",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "1 dia útil",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/510btp.jpg-3.jpg",
    "update": "Há 40 minutos"
  },
  {
    "id": "11",
    "nome": "Máquina de Lavar Roupa Samsung 10.5kg",
    "marca": "Samsung",
    "modelo": "WW10T504DAW",
    "descricao": "Máquina de lavar roupa com tecnologia EcoBubble e motor Digital Inverter.",
    "preco": 63000.00,
    "estoque": 15,
    "categoria": "Equipamento Elétrico",
    "garantia": "2 anos",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "5 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/51DxFCtTVkL.jpg",
    "update": "Há 50 minutos"
  },
  {
    "id": "12",
    "nome": "Geladeira Brastemp Frost Free 375L",
    "marca": "Brastemp",
    "modelo": "BRE57AK",
    "descricao": "Geladeira Frost Free com compartimento extrafrio e controle eletrônico de temperatura.",
    "preco": 78000.00,
    "estoque": 18,
    "categoria": "Equipamento Elétrico",
    "garantia": "1 ano",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "4 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/57293.jpg",
    "update": "Há 1 hora"
  },
  {
    "id": "13",
    "nome": "Cafeteira Elétrica Mondial Dolce Arome",
    "marca": "Mondial",
    "modelo": "C-32",
    "descricao": "Cafeteira elétrica com capacidade para 15 xícaras, filtro permanente e jarra de vidro.",
    "preco": 4500.00,
    "estoque": 60,
    "categoria": "Equipamento Elétrico",
    "garantia": "6 meses",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "2 dias úteis",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9734;",
    "image_poster": "/assets/software/D_NQ_NP_909732-MLU72402757758_102023-O.png",
    "update": "Há 20 minutos"
  },
  {
    "id": "14",
    "nome": "Blusa Feminina de Algodão",
    "marca": "Hering",
    "modelo": "Casual Fit",
    "descricao": "Blusa feminina de algodão, confortável e ideal para o dia a dia.",
    "preco": 2500.00,
    "estoque": 90,
    "categoria": "Roupas",
    "garantia": "Sem garantia",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "1 dia útil",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9734;",
    "image_poster": "/assets/software/da272ecb29f6f2916ee552bcd1e09ed7.jpeg",
    "update": "Há 15 minutos"
  },
  {
    "id": "15",
    "nome": "Mochila Executiva Dell Pro",
    "marca": "Dell",
    "modelo": "Pro 17",
    "descricao": "Mochila para notebook de até 17 polegadas, resistente à água e design moderno.",
    "preco": 7800.00,
    "estoque": 40,
    "categoria": "Acessórios",
    "garantia": "1 ano",
    "disponibilidade": "Em estoque",
    "prazo_entrega": "1 dia útil",
    "prazo_devolucao": "7 dias corridos",
    "classificacao": "&#9733;",
    "image_poster": "/assets/software/sg-11134201-22100-3s9rn7rka5iv5f.jpeg",
    "update": "Há 30 minutos"
  }
];

  function exibirProdutos(produtos) {
    const resultadoDiv = document.getElementById('producto-lista');

    produtos.forEach(produto => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card-product';

        const imagemLink = document.createElement('a');
        imagemLink.href = `/product/index.html?id=${produto.id}`;

        const img = document.createElement('img');
        img.src = produto.image_poster;
        img.className = 'card-product-img';
        img.alt = produto.nome;

        imagemLink.appendChild(img);

        const cardContentDiv = document.createElement('div');
        cardContentDiv.className = 'card-product-content';

        const cardTitle = document.createElement('h3');
        cardTitle.className = 'card-product-title';
        cardTitle.innerHTML = produto.nome;

        const cardCategory = document.createElement('div');
        cardCategory.className = 'card-product-category';
        cardCategory.innerHTML = `<p class="category">${produto.update}</p><p class="estoque">+${produto.estoque}</p>`;

        const cardRating = document.createElement('p');
        cardRating.className = 'card-product-rating';
        cardRating.innerHTML = produto.classificacao;

        const cardPrice = document.createElement('p');
        cardPrice.className = 'card-product-price';
        cardPrice.textContent = produto.preco.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + "MT";

        cardContentDiv.appendChild(cardTitle);
        cardContentDiv.appendChild(cardCategory);
        cardContentDiv.appendChild(cardRating);
        cardContentDiv.appendChild(cardPrice);

        cardDiv.appendChild(imagemLink);
        cardDiv.appendChild(cardContentDiv);

        resultadoDiv.appendChild(cardDiv);
    });
}
// Função para abrir o modal com os detalhes do produto
function abrirModal(produto) {
  const modal = document.getElementById('modal');
  const modalImg = document.querySelector('.content-left img');
  const modalName = document.querySelector('.content-right .name');
  const modalPrice = document.querySelector('.content-right .price');
  const modalCategory = document.querySelector('.content-right .categoria');
  document.getElementById('modal-entrega').textContent = produto.prazo_entrega || "Não informado";
  document.getElementById('modal-devolucao').textContent = produto.prazo_devolucao || "Não informado";
  document.getElementById('modal-garantia').textContent = produto.garantia || "Não informado";


  // Atualizar o conteúdo do modal
  modalImg.src = produto.image_poster;
  modalImg.alt = produto.nome;
  modalName.textContent = produto.nome;
  modalPrice.textContent = `${produto.preco.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  })} MT`;
  modalCategory.innerHTML = `Categoria: ${produto.categoria} | ${produto.disponibilidade} | <span>${produto.classificacao}</span>`;

  // Exibir o modal
  modal.style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}

// Adiciona evento de clique para cada produto
function exibirProdutos(produtos) {
  const resultadoDiv = document.getElementById('producto-lista');

  produtos.forEach(produto => {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card-product';

      const img = document.createElement('img');
      img.src = produto.image_poster;
      img.className = 'card-product-img';
      img.alt = produto.nome;

      const cardContentDiv = document.createElement('div');
      cardContentDiv.className = 'card-product-content';

      const cardTitle = document.createElement('h3');
      cardTitle.className = 'card-product-title';
      cardTitle.textContent = produto.nome;

      const cardCategory = document.createElement('div');
      cardCategory.className = 'card-product-category';
      cardCategory.innerHTML = `<p class="category">${produto.update}</p><p class="estoque">+${produto.estoque}</p>`;

      const cardPrice = document.createElement('p');
      cardPrice.className = 'card-product-price';
      cardPrice.textContent = produto.preco.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
      }) + "MT";

      cardContentDiv.appendChild(cardTitle);
      cardContentDiv.appendChild(cardCategory);
      cardContentDiv.appendChild(cardPrice);

      cardDiv.appendChild(img);
      cardDiv.appendChild(cardContentDiv);
      resultadoDiv.appendChild(cardDiv);

      // Evento de clique para abrir o modal
      cardDiv.addEventListener('click', () => abrirModal(produto));
  });
}

// Executa a função para exibir os produtos
exibirProdutos(produtosJSON);

document.querySelectorAll(".color-option").forEach(item => {
  item.addEventListener("mouseenter", function() {
      document.body.style.backgroundColor = this.getAttribute("data-color");
  });

  item.addEventListener("mouseleave", function() {
      document.body.style.backgroundColor = ""; // Volta ao normal
  });
});
