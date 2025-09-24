const allProducts = [
        // Bolsos
        {
            id: 101, name: 'Bolso Salmon', reference: 'Salmon', category: 'Bolsos', price: 185000,
            colors: ['rojo', 'cafe', 'plateado', 'salmon', 'negro', 'rosa'],
            images: {
                salmon: 'https://i.pinimg.com/736x/3a/05/43/3a05432a7abca663c6ab96b7c971577c.jpg',
                rojo: 'https://i.pinimg.com/736x/5e/65/4c/5e654cce4e8e2d88ad49994c44becdfb.jpg',
                cafe: 'https://i.pinimg.com/736x/a9/42/d6/a942d6782fa638575f2a7e05695d3224.jpg',
                plateado: 'https://i.pinimg.com/736x/81/37/d4/8137d4c96b0a79121b8f687a90ab4420.jpg',
                negro: 'https://i.pinimg.com/736x/91/1d/29/911d299c92cad7d15f7d57b50594ffe2.jpg',
                rosa: 'https://i.pinimg.com/736x/d6/26/66/d626662375b9603ed5d399d1ca452c0c.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/5a/55/05/5a55056e30a78e0ff6b98ab94f855052.jpg',
            hoverImage: 'https://i.pinimg.com/736x/1f/19/16/1f19168d8914cc649bdb2058df880791.jpg'
        },
        // --- INICIO DE LOS CAMBIOS PARA BOLSO JADE ---
        {
            id: 102, name: 'Bolso Jade (Avana)', reference: 'Jade', category: 'Bolsos', price: 210000,
            colors: ['Blanco'],
            images: {
                Blanco: 'https://i.pinimg.com/736x/c0/45/a4/c045a4e9f12b4cf6d081454919a5040f.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/c0/45/a4/c045a4e9f12b4cf6d081454919a5040f.jpg',
            hoverImage: 'https://i.pinimg.com/736x/40/f4/4b/40f44b75596a19f6f99130560a2bb54a.jpg'
        },
        {
            id: 103, name: 'Bolso Brandy', reference: 'Brandy', category: 'Bolsos', price: 230000,
            colors: ['naranja', 'beige', 'camel'],
            images: {
                naranja: 'https://i.pinimg.com/736x/e1/06/a2/e106a20f3229cdb9d4afaa855b5754e3.jpg',
                beige: 'https://i.pinimg.com/736x/b4/02/89/b402892356300012765ddb928d87f87a.jpg',
                camel: 'https://i.pinimg.com/736x/ac/4a/67/ac4a67a095c04ae4d8eecc78465fe61d.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/ac/4a/67/ac4a67a095c04ae4d8eecc78465fe61d.jpg',
            hoverImage: 'https://i.pinimg.com/736x/ac/4a/67/ac4a67a095c04ae4d8eecc78465fe61d.jpg'
        },
        {
            id: 105, name: 'Bolso Ebony', reference: 'Ebony', category: 'Bolsos', price: 240000,
            colors: ['dorado', 'azul', 'negro'],
            images: {
                dorado: 'https://i.pinimg.com/736x/f5/f8/b4/f5f8b4dc393ebd1a2b85b8817cfdd37f.jpg',
                azul: 'https://i.pinimg.com/736x/f5/f8/b4/f5f8b4dc393ebd1a2b85b8817cfdd37f.jpg',
                negro: 'https://i.pinimg.com/736x/f5/f8/b4/f5f8b4dc393ebd1a2b85b8817cfdd37f.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/f5/f8/b4/f5f8b4dc393ebd1a2b85b8817cfdd37f.jpg',
            hoverImage: 'https://i.pinimg.com/736x/f5/f8/b4/f5f8b4dc393ebd1a2b85b8817cfdd37f.jpg'
        },
        {
            id: 106, name: 'Bolso Retruk', reference: 'Retruk', category: 'Bolsos', price: 220000,
            colors: ['rojo', 'negro'],
            images: {
                rojo: 'https://i.pinimg.com/736x/10/f8/51/10f851c123efa996739624c70b769b53.jpg',
                negro: 'https://i.pinimg.com/736x/9e/32/fc/9e32fc8175b141ea50e498a461363323.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/10/f8/51/10f851c123efa996739624c70b769b53.jpg',
            hoverImage: 'https://i.pinimg.com/736x/10/f8/51/10f851c123efa996739624c70b769b53.jpg'
        },
        {
            id: 107, name: 'Bolso Golden', reference: 'Golden', category: 'Bolsos', price: 250000,
            colors: ['cafe'],
            images: {
                cafe: 'https://i.pinimg.com/736x/34/29/27/342927ce7d32b0280e27ff6ccf448ddb.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/34/29/27/342927ce7d32b0280e27ff6ccf448ddb.jpg',
            hoverImage: 'https://i.pinimg.com/736x/34/29/27/342927ce7d32b0280e27ff6ccf448ddb.jpg'
        },
        {
            id: 108, name: 'Bolso Navy', reference: 'Navy', category: 'Bolsos', price: 200000,
            colors: ['negro','cafe','rosa'],
            images: {
                negro: 'https://i.pinimg.com/736x/8b/8e/66/8b8e662a04d1ba2d4e8ff150e0a4c779.jpg',
                cafe: 'https://i.pinimg.com/736x/4a/c1/c5/4ac1c55085a6176780494508dd575ade.jpg',
                rosa: 'https://i.pinimg.com/736x/56/03/a3/5603a3a19c4c3a59b6611158362f74d9.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/4a/c1/c5/4ac1c55085a6176780494508dd575ade.jpg',
            hoverImage: 'https://i.pinimg.com/736x/37/20/38/37203892b88b50ed136f8958ec959e23.jpg'
        },
        {
            id: 109, name: 'Bolso Triana', reference: 'Triana', category: 'Bolsos', price: 195000,
            colors: ['rojo','rosa'],
            images: {
                rojo: 'https://i.pinimg.com/736x/f4/4c/05/f44c0541091db582f298712a137a6da1.jpg',
                rosa: 'https://i.pinimg.com/736x/87/dd/ac/87ddacc91aeaa9e54662e284117662a1.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/f4/4c/05/f44c0541091db582f298712a137a6da1.jpg',
            hoverImage: 'https://i.pinimg.com/736x/29/a5/bf/29a5bf0b35455c973a3cbfa541901024.jpg'
        },
         {
            id: 110, name: 'Bolso Scarlet', reference: 'Scarlet', category: 'Bolsos', price: 215000,
            colors: ['rojo','negro','cafe'],
            images: {
                rojo: 'https://i.pinimg.com/736x/c2/11/12/c21112282905667c70570135f5e35d6b.jpg',
                negro: 'https://i.pinimg.com/736x/0d/33/64/0d336433f9f400df442cf3f2b62f52d6.jpg',
                cafe: 'https://i.pinimg.com/736x/ea/87/11/ea87114535fcc30531dc6c50a4827852.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/c2/11/12/c21112282905667c70570135f5e35d6b.jpg',
            hoverImage: 'https://i.pinimg.com/736x/c6/72/07/c67207d8064558dc964f75aa82c8c9a2.jpg'
        },
        {
            id: 111, name: 'Bolso Forest', reference: 'Forest', category: 'Bolsos', price: 225000,
            colors: ['cafe'],
            images: {
                cafe: 'https://i.pinimg.com/736x/18/e7/96/18e7964b8d345351ed71677e237043c6.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/18/e7/96/18e7964b8d345351ed71677e237043c6.jpg',
            hoverImage: 'https://i.pinimg.com/736x/18/e7/96/18e7964b8d345351ed71677e237043c6.jpg'
        },
        {
            id: 112, name: 'Bolso Burdeos', reference: 'Burdeos', category: 'Bolsos', price: 205000,
            colors: ['negro','rojo','cafe'],
            images: {
                negro: 'https://i.pinimg.com/736x/8e/2f/ba/8e2fbaf013f278393c300bdf8ec7de94.jpg',
                rojo: 'https://i.pinimg.com/736x/67/86/d4/6786d4ae41bdc1d7fba338973ea98ee5.jpg',
                cafe: 'https://i.pinimg.com/736x/87/38/32/873832ae5e1b223e0f3dad622b6bb3d7.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/8e/2f/ba/8e2fbaf013f278393c300bdf8ec7de94.jpg',
            hoverImage: 'https://i.pinimg.com/736x/8e/2f/ba/8e2fbaf013f278393c300bdf8ec7de94.jpg'
        },
        
        // Mochilas
        {
            id: 201, name: 'Mochila Tula', reference: 'Tula', category: 'Mochilas', price: 280000,
            colors: ['negro'],
            images: {
                negro: 'https://i.pinimg.com/736x/57/35/70/573570bd67c70e764396adedd6a1baf9.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/57/35/70/573570bd67c70e764396adedd6a1baf9.jpg',
            hoverImage: 'https://i.pinimg.com/736x/57/35/70/573570bd67c70e764396adedd6a1baf9.jpg'
        },
        {
            id: 202, name: 'Mochila Italia', reference: 'Italia', category: 'Mochilas', price: 300000,
            colors: ['cafe'],
            images: {
                cafe: 'https://i.pinimg.com/736x/5e/32/77/5e32771e892c6e04b7691ede3023951d.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/5e/32/77/5e32771e892c6e04b7691ede3023951d.jpg',
            hoverImage: 'https://i.pinimg.com/736x/5d/7a/29/5d7a291f5f71b8e68be339fff7f62ccb.jpg'
        },
        {
            id: 203, name: 'Mochila Avana', reference: 'Avana', category: 'Mochilas', price: 290000,
            colors: ['rojo'],
            images: {
                rojo: 'https://i.pinimg.com/736x/e9/39/35/e939354c88e3ffca1a95d8f63d379a1b.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/e9/39/35/e939354c88e3ffca1a95d8f63d379a1b.jpg',
            hoverImage: 'https://i.pinimg.com/736x/e6/0b/92/e60b92bdb8a1a44e5fe0cd6040c8e95f.jpg'
        },
        {
            id: 204, name: 'Mochila Nautic', reference: 'Nautic', category: 'Mochilas', price: 250000,
            colors: ['negro'],
            images: {
                negro: 'https://i.pinimg.com/736x/78/4c/5a/784c5a60e5430e70b45c503e31b3dcda.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/78/4c/5a/784c5a60e5430e70b45c503e31b3dcda.jpg',
            hoverImage: 'https://i.pinimg.com/736x/09/48/b3/0948b3bb07eadc43f49c812288e896cf.jpg'
        },
         {
            id: 205, name: 'Mochila Marine', reference: 'Marine', category: 'Mochilas', price: 250000,
            colors: ['negro'],
            images: {
                negro: 'https://i.pinimg.com/736x/8a/3f/88/8a3f8827cc49ab97ded49329812e5290.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/8a/3f/88/8a3f8827cc49ab97ded49329812e5290.jpg',
            hoverImage: 'https://i.pinimg.com/736x/8a/3f/88/8a3f8827cc49ab97ded49329812e5290.jpg'
        },
        {
            id: 301, name: 'Monedero Capri', reference: 'Monedero Capri', category: 'Accesorios', subcategory: 'Monederos', price: 60000,
            colors: ['negro','rosa','blanco'],
            images: {
                negro: 'https://i.pinimg.com/736x/5f/cf/c2/5fcfc20c74abd9ca95a51bd0ac44c9a2.jpg',
                rosa: 'https://i.pinimg.com/736x/5f/cf/c2/5fcfc20c74abd9ca95a51bd0ac44c9a2.jpg',
                blanco: 'https://i.pinimg.com/736x/5f/cf/c2/5fcfc20c74abd9ca95a51bd0ac44c9a2.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/5f/cf/c2/5fcfc20c74abd9ca95a51bd0ac44c9a2.jpg',
            hoverImage: 'https://i.pinimg.com/736x/5f/cf/c2/5fcfc20c74abd9ca95a51bd0ac44c9a2.jpg'
        },
        {
            id: 302, name: 'Monedero Coral', reference: 'Monedero Coral', category: 'Accesorios', subcategory: 'Monederos', price: 45000,
            colors: ['rojo','azul','rosa','gris','naranja'],
            images: {
                rojo: 'https://i.pinimg.com/736x/ff/a1/86/ffa1868b5a9ad89944e6c0022b1fa46d.jpg',
                azul: 'https://i.pinimg.com/736x/e8/15/a1/e815a1ec1f77822c06a6d6a6800b925f.jpg',
                rosa: 'https://i.pinimg.com/736x/46/63/c8/4663c8e16ccbfb4a8a187a11a72c1dc9.jpg',
                gris: 'https://i.pinimg.com/736x/72/15/f0/7215f04ac5dc595b9e81b1fcab486926.jpg',
                naranja: 'https://i.pinimg.com/736x/90/05/4e/90054e75f8d07e0dad38286ec2e82818.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/ff/a1/86/ffa1868b5a9ad89944e6c0022b1fa46d.jpg',
            hoverImage: 'https://i.pinimg.com/736x/00/82/b6/0082b64832c2dfcce9bfdbecc7febfb2.jpg'
        },
        {
            id: 303, name: 'Monedero Caoba', reference: 'Monedero Caoba', category: 'Accesorios', subcategory: 'Monederos', price: 45000,
            colors: ['rojo','dorado','negro','morado','azul','rosa','amarillo'],
            images: {
                rojo: 'https://i.pinimg.com/736x/88/17/1a/88171a8d9dbefeb93b0ab0512b33ec4a.jpg',
                dorado: 'https://i.pinimg.com/736x/88/17/1a/88171a8d9dbefeb93b0ab0512b33ec4a.jpg',
                negro: 'https://i.pinimg.com/736x/88/17/1a/88171a8d9dbefeb93b0ab0512b33ec4a.jpg',
                morado: 'https://i.pinimg.com/736x/aa/2b/a0/aa2ba03c911f36c56df68d4caf48f82b.jpg',
                azul: 'https://i.pinimg.com/736x/aa/2b/a0/aa2ba03c911f36c56df68d4caf48f82b.jpg',
                rosa: 'https://i.pinimg.com/736x/aa/2b/a0/aa2ba03c911f36c56df68d4caf48f82b.jpg',
                amarillo: 'https://i.pinimg.com/736x/aa/2b/a0/aa2ba03c911f36c56df68d4caf48f82b.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/88/17/1a/88171a8d9dbefeb93b0ab0512b33ec4a.jpg',
            hoverImage: 'https://i.pinimg.com/736x/88/17/1a/88171a8d9dbefeb93b0ab0512b33ec4a.jpg'
        },
        {
            id: 304, name: 'Mini Carriel', reference: 'Mini Carriel', category: 'Accesorios', subcategory: 'Carriel', price: 160000,
            colors: ['negro','rojo'],
            images: {
                negro: 'https://i.pinimg.com/736x/68/88/a6/6888a666794437d3b1bc563215f136df.jpg',
                rojo: 'https://i.pinimg.com/736x/3f/0a/aa/3f0aaa447a0c316df43a0a51ee0a65b2.jpg',  
            },
            mainImage: 'https://i.pinimg.com/736x/68/88/a6/6888a666794437d3b1bc563215f136df.jpg',
            hoverImage: 'https://i.pinimg.com/736x/68/88/a6/6888a666794437d3b1bc563215f136df.jpg'
        },
        {
            id: 305, name: 'Billetera Mediana', reference: 'Billetera Mediana', category: 'Accesorios', subcategory: 'Billeteras', price: 85000,
            colors: ['azul','naranja','rojo','negro','plateado','dorado'],
            images: {
                azul: 'https://i.pinimg.com/736x/aa/39/96/aa39965d0f0710b314d509cd15f48b54.jpg',
                naranja: 'https://i.pinimg.com/736x/aa/39/96/aa39965d0f0710b314d509cd15f48b54.jpg',
                rojo: 'https://i.pinimg.com/736x/aa/39/96/aa39965d0f0710b314d509cd15f48b54.jpg',
                negro: 'https://i.pinimg.com/736x/aa/39/96/aa39965d0f0710b314d509cd15f48b54.jpg',
                plateado: 'https://i.pinimg.com/736x/aa/39/96/aa39965d0f0710b314d509cd15f48b54.jpg',
                dorado: 'https://i.pinimg.com/736x/aa/39/96/aa39965d0f0710b314d509cd15f48b54.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/aa/39/96/aa39965d0f0710b314d509cd15f48b54.jpg',
            hoverImage: 'https://i.pinimg.com/736x/aa/39/96/aa39965d0f0710b314d509cd15f48b54.jpg'
        },
        {
            id: 306, name: 'Billetera + Espejo', reference: 'Billetera + Espejo', category: 'Accesorios', subcategory: 'Billeteras', price: 95000,
            colors: ['azul','plateado','dorado','negro','rosa'],
            images: {
                azul: 'https://i.pinimg.com/736x/58/a5/35/58a53503ee9238acefb27a2ecb663000.jpg',
                plateado: 'https://i.pinimg.com/736x/58/a5/35/58a53503ee9238acefb27a2ecb663000.jpg',
                dorado: 'https://i.pinimg.com/736x/58/a5/35/58a53503ee9238acefb27a2ecb663000.jpg',
                negro: 'https://i.pinimg.com/736x/58/a5/35/58a53503ee9238acefb27a2ecb663000.jpg',
                rosa: 'https://i.pinimg.com/736x/58/a5/35/58a53503ee9238acefb27a2ecb663000.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/58/a5/35/58a53503ee9238acefb27a2ecb663000.jpg',
            hoverImage: 'https://i.pinimg.com/736x/58/a5/35/58a53503ee9238acefb27a2ecb663000.jpg'
        },
        {
            id: 307, name: 'Billetera Corta', reference: 'Billetera Corta', category: 'Accesorios', subcategory: 'Billeteras', price: 70000,
            colors: ['rojo','verde','negro','negro','cafe','camel'],
            images: {
                rojo: 'https://i.pinimg.com/736x/a1/ea/89/a1ea890488df1a79fa1d3a5957341197.jpg',
                verde: 'https://i.pinimg.com/736x/98/9a/ff/989afff21f2be9acce1459694c5d10fc.jpg',
                negro: 'https://i.pinimg.com/736x/98/9a/ff/989afff21f2be9acce1459694c5d10fc.jpg',
                cafe: 'https://i.pinimg.com/736x/98/9a/ff/989afff21f2be9acce1459694c5d10fc.jpg',
                camel: 'https://i.pinimg.com/736x/98/9a/ff/989afff21f2be9acce1459694c5d10fc.jpg',
            },
            mainImage: 'https://i.pinimg.com/736x/a1/ea/89/a1ea890488df1a79fa1d3a5957341197.jpg',
            hoverImage: 'https://i.pinimg.com/736x/74/29/c5/7429c5680f37b125594fbd4848820f74.jpg'
        },
        {
            id: 308, name: 'Mini Billetera Skimo', reference: 'Mini Billetera Skimo', category: 'Accesorios', subcategory: 'Billeteras', price: 65000,
            colors: ['rojo'],
            images: {
                rojo: 'https://i.pinimg.com/736x/d0/03/06/d00306240d0c59f6425f06d39f769132.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/d0/03/06/d00306240d0c59f6425f06d39f769132.jpg',
            hoverImage: 'https://i.pinimg.com/736x/d0/03/06/d00306240d0c59f6425f06d39f769132.jpg'
        },
        {
            id: 309, name: 'Canguro Tango', reference: 'Canguro Tango', category: 'Accesorios', subcategory: 'Canguros', price: 120000,
            colors: ['rojo'],
            images: {
                rojo: 'https://i.pinimg.com/736x/f4/a5/96/f4a596932b3fb164938dc6c491516475.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/f4/a5/96/f4a596932b3fb164938dc6c491516475.jpg',
            hoverImage: 'https://i.pinimg.com/736x/a7/f5/0a/a7f50a5c64bb104062477ac7565d6845.jpg'
        },
        {
            id: 310, name: 'Billetera Aqua', reference: 'Billetera Aqua', category: 'Accesorios', subcategory: 'Billeteras', price: 80000,
            colors: ['amarillo','rojo','blanco','naranja','rosa','dorado','negro','azul'],
            images: {
                amarillo: 'https://i.pinimg.com/736x/33/5b/98/335b98b47f7c1314a7c0fefa95c0c90d.jpg',
                rojo: 'https://i.pinimg.com/736x/33/5b/98/335b98b47f7c1314a7c0fefa95c0c90d.jpg',
                blanco: 'https://i.pinimg.com/736x/33/5b/98/335b98b47f7c1314a7c0fefa95c0c90d.jpg',
                naranja: 'https://i.pinimg.com/736x/a4/46/4e/a4464e538001b6d547c0aea0850bf272.jpg',
                rosa: 'https://i.pinimg.com/736x/a4/46/4e/a4464e538001b6d547c0aea0850bf272.jpg',
                dorado: 'https://i.pinimg.com/736x/a4/46/4e/a4464e538001b6d547c0aea0850bf272.jpg',
                negro: 'https://i.pinimg.com/736x/9e/03/58/9e035872f2bb274c382addead7eb8aa3.jpg',
                azul: 'https://i.pinimg.com/736x/9e/03/58/9e035872f2bb274c382addead7eb8aa3.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/9e/03/58/9e035872f2bb274c382addead7eb8aa3.jpg',
            hoverImage: 'https://i.pinimg.com/736x/9e/03/58/9e035872f2bb274c382addead7eb8aa3.jpg'
        },
        {
            id: 311, name: 'Cinturón Nut', reference: 'Cinturón Nut', category: 'Accesorios', subcategory: 'Cinturones', price: 50000,
            colors: ['negro','azul','rojo','morado','rosa','naranja'],
            images: {
                negro: 'https://i.pinimg.com/736x/87/17/8e/87178e04393ccb1c947eeb06a73fb6e1.jpg',
                azul: 'https://i.pinimg.com/736x/b2/3c/d4/b23cd4089b5ff70721761650a61d81e4.jpg',
                rojo: 'https://i.pinimg.com/736x/94/f0/80/94f0802ced39136f440e3112b35b4347.jpg',
                morado: 'https://i.pinimg.com/736x/fb/2b/8e/fb2b8ee9ac8f965e541442b2c6b13e72.jpg',
                rosa: 'https://i.pinimg.com/736x/57/6b/43/576b4373d2d73442d7e7d0b274ba6fc6.jpg',
                naranja: 'https://i.pinimg.com/736x/47/45/3f/47453f5e64f6a806a2c5d907aab84d34.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/a7/21/4b/a7214bec04ee492bfb9d641de4539a1b.jpg',
            hoverImage: 'https://i.pinimg.com/736x/21/47/6f/21476f6120780eb974b60cbadf4ac15f.jpg'
        },
        {
            id: 401, name: 'Llavero de Cuero', reference: 'Llavero', category: 'Complementos', subcategory: 'Llaveros', price: 15000,
            colors: ['naranja','cafe','azul','verde','rojo'],
            images: {
                naranja: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg',
                cafe: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg',
                azul: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg',
                verde: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg',
                rojo: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg',
            hoverImage: 'https://i.pinimg.com/1200x/16/d0/63/16d063d4e547f385968ce82f1822fdd6.jpg'
        },
        {
            id: 402, name: 'Portapasaportes Cuero', reference: 'Portapasaportes', category: 'Complementos', subcategory: 'Portapasaportes', price: 25000,
            colors: ['negro','azul','cafe'],
            images: {
                negro: 'https://i.pinimg.com/736x/05/8a/dc/058adce4e4a362273ce144df277d0ad6.jpg',
                azul: 'https://i.pinimg.com/736x/05/8a/dc/058adce4e4a362273ce144df277d0ad6.jpg',
                cafe: 'https://i.pinimg.com/736x/05/8a/dc/058adce4e4a362273ce144df277d0ad6.jpg',
                
            },
            mainImage: 'https://i.pinimg.com/736x/05/8a/dc/058adce4e4a362273ce144df277d0ad6.jpg',
            hoverImage: 'https://i.pinimg.com/736x/05/8a/dc/058adce4e4a362273ce144df277d0ad6.jpg'
        },
        
    ];

export const initialStore = () => {
    return {
        allProducts: allProducts,
        cart: [], // Aquí se almacenarán los productos del carrito
    };
};

export default function storeReducer(store, action = {}) {
    switch (action.type) {
        case "ADD_TO_CART":
            // Lógica para añadir un producto al carrito.
            // El action.payload ya contiene la imagen y el color correctos desde Demo.jsx.
            return {
                ...store,
                cart: [...store.cart, action.payload],
            };
        
        case "REMOVE_FROM_CART":
            // Lógica para eliminar un producto del carrito.
            return {
                ...store,
                cart: store.cart.filter(item => item.id !== action.payload),
            };
        
        case "UPDATE_CART_ITEM_COLOR":
            // Lógica para cambiar el color de un producto en el carrito.
            // Se actualiza la imagen y el color seleccionado.
            return {
                ...store,
                cart: store.cart.map(item => {
                    if (item.id === action.payload.itemId) {
                        return {
                            ...item,
                            selectedColor: action.payload.newColor,
                            image: action.payload.newImage
                        };
                    }
                    return item;
                }),
            };
        
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};