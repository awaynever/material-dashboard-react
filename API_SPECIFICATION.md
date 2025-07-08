# Especificação de API para MonitorPol

Este documento descreve os endpoints e formatos de dados necessários para que o frontend do MonitorPol funcione com dados reais de um backend.

## Sumário

1. [Autenticação](#autenticação)
2. [Candidatos](#candidatos)
3. [Hashtags](#hashtags)
4. [Posts](#posts)
5. [Analytics](#analytics)

## Autenticação

### POST /api/auth/login

**Descrição:** Autenticar usuário no sistema.

**Requisição:**
```json
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

**Resposta (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Nome do Usuário",
    "email": "usuario@exemplo.com",
    "role": "admin"
  }
}
```

## Candidatos

### GET /api/candidatos

**Descrição:** Listar todos os candidatos monitorados.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "candidatos": [
    {
      "id": 1,
      "nome": "João Silva",
      "username": "@joaosilva",
      "partido": "PSD",
      "cargo": "Prefeito"
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "username": "@mariaoliveira",
      "partido": "PT",
      "cargo": "Vereadora"
    }
  ]
}
```

### POST /api/candidatos

**Descrição:** Adicionar novo candidato para monitoramento.

**Headers:**
- Authorization: Bearer {token}

**Requisição:**
```json
{
  "nome": "Carlos Santos",
  "username": "@carlossantos",
  "partido": "PSDB",
  "cargo": "Prefeito"
}
```

**Resposta (201 Created):**
```json
{
  "id": 3,
  "nome": "Carlos Santos",
  "username": "@carlossantos",
  "partido": "PSDB",
  "cargo": "Prefeito"
}
```

### GET /api/candidatos/{id}

**Descrição:** Obter detalhes de um candidato específico.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "id": 1,
  "nome": "João Silva",
  "username": "@joaosilva",
  "partido": "PSD",
  "cargo": "Prefeito"
}
```

### PUT /api/candidatos/{id}

**Descrição:** Atualizar informações de um candidato.

**Headers:**
- Authorization: Bearer {token}

**Requisição:**
```json
{
  "nome": "João Silva Atualizado",
  "username": "@joaosilva",
  "partido": "PSD",
  "cargo": "Prefeito"
}
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "nome": "João Silva Atualizado",
  "username": "@joaosilva",
  "partido": "PSD",
  "cargo": "Prefeito"
}
```

### DELETE /api/candidatos/{id}

**Descrição:** Remover um candidato do monitoramento.

**Headers:**
- Authorization: Bearer {token}

**Resposta (204 No Content)**

## Hashtags

### GET /api/hashtags

**Descrição:** Listar todas as hashtags monitoradas.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "hashtags": [
    {
      "id": 1,
      "texto": "#eleicoes2025"
    },
    {
      "id": 2,
      "texto": "#politica"
    }
  ]
}
```

### POST /api/hashtags

**Descrição:** Adicionar nova hashtag para monitoramento.

**Headers:**
- Authorization: Bearer {token}

**Requisição:**
```json
{
  "texto": "#cidademelhor"
}
```

**Resposta (201 Created):**
```json
{
  "id": 3,
  "texto": "#cidademelhor"
}
```

### DELETE /api/hashtags/{id}

**Descrição:** Remover uma hashtag do monitoramento.

**Headers:**
- Authorization: Bearer {token}

**Resposta (204 No Content)**

## Posts

### GET /api/posts

**Descrição:** Listar posts recentes com paginação.

**Headers:**
- Authorization: Bearer {token}

**Parâmetros de Query:**
- page (opcional, default: 1): Número da página
- limit (opcional, default: 10): Número de itens por página
- sort (opcional, default: "timestamp:desc"): Ordenação

**Resposta (200 OK):**
```json
{
  "posts": [
    {
      "id": 1,
      "username": "@prefeitura_oficial",
      "profileImage": "https://example.com/profile.jpg",
      "mediaType": "Post",
      "timestamp": "25/06/2025 às 14:30",
      "date": "25 de junho de 2025",
      "mediaExpired": false,
      "caption": "Hoje inauguramos mais uma unidade de saúde básica no bairro Jardim Esperança...",
      "likes": 230,
      "comments": 45,
      "sentiment": "Positivo",
      "sentimentColor": "success",
      "permalink": "https://instagram.com/p/example",
      "categoria": "Saúde Básica",
      "candidato": "João Silva",
      "hashtags": ["#saude", "#prefeitura", "#novaUBS"]
    }
  ],
  "pagination": {
    "total": 120,
    "page": 1,
    "limit": 10,
    "pages": 12
  }
}
```

### GET /api/posts/candidato/{id}

**Descrição:** Listar posts relacionados a um candidato específico.

**Headers:**
- Authorization: Bearer {token}

**Parâmetros de Query:**
- page (opcional, default: 1): Número da página
- limit (opcional, default: 10): Número de itens por página

**Resposta (200 OK):**
```json
{
  "candidato": {
    "id": 1,
    "nome": "João Silva",
    "username": "@joaosilva",
    "partido": "PSD",
    "cargo": "Prefeito"
  },
  "posts": [
    {
      "id": 1,
      "username": "@prefeitura_oficial",
      "profileImage": "https://example.com/profile.jpg",
      "mediaType": "Post",
      "timestamp": "25/06/2025 às 14:30",
      "date": "25 de junho de 2025",
      "mediaExpired": false,
      "caption": "Hoje inauguramos mais uma unidade de saúde básica...",
      "likes": 230,
      "comments": 45,
      "sentiment": "Positivo",
      "sentimentColor": "success",
      "permalink": "https://instagram.com/p/example",
      "categoria": "Saúde Básica",
      "candidato": "João Silva",
      "hashtags": ["#saude", "#prefeitura", "#novaUBS"]
    }
  ],
  "pagination": {
    "total": 45,
    "page": 1,
    "limit": 10,
    "pages": 5
  }
}
```

### GET /api/posts/hashtag/{id}

**Descrição:** Listar posts relacionados a uma hashtag específica.

**Headers:**
- Authorization: Bearer {token}

**Parâmetros de Query:**
- page (opcional, default: 1): Número da página
- limit (opcional, default: 10): Número de itens por página

**Resposta (200 OK):**
```json
{
  "hashtag": {
    "id": 1,
    "texto": "#eleicoes2025"
  },
  "posts": [
    {
      "id": 12,
      "username": "@politica_agora",
      "profileImage": "https://example.com/profile2.jpg",
      "mediaType": "Reels",
      "timestamp": "23/06/2025 às 18:45",
      "date": "23 de junho de 2025",
      "mediaExpired": false,
      "caption": "O candidato Carlos Santos apresentou hoje seu plano de governo...",
      "likes": 320,
      "comments": 89,
      "sentiment": "Neutro",
      "sentimentColor": "info",
      "permalink": "https://instagram.com/p/example3",
      "categoria": "Política",
      "candidato": "Carlos Santos",
      "hashtags": ["#eleicoes2025", "#politica", "#planoDeGoverno"]
    }
  ],
  "pagination": {
    "total": 28,
    "page": 1,
    "limit": 10,
    "pages": 3
  }
}
```

### GET /api/posts/categorias

**Descrição:** Listar todas as categorias de posts disponíveis.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "categorias": [
    "Saúde Básica",
    "Educação",
    "Segurança Pública",
    "Infraestrutura",
    "Política",
    "Meio Ambiente",
    "Transporte Público",
    "Economia"
  ]
}
```

### GET /api/posts/assuntos

**Descrição:** Listar assuntos em alta com base nos posts monitorados.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "assuntos": [
    {
      "id": 1,
      "nome": "Saúde Pública",
      "posts": 45,
      "sentimentoPositivo": 25,
      "sentimentoNegativo": 10,
      "sentimentoNeutro": 10
    },
    {
      "id": 2,
      "nome": "Segurança",
      "posts": 38,
      "sentimentoPositivo": 12,
      "sentimentoNegativo": 20,
      "sentimentoNeutro": 6
    }
  ]
}
```

## Analytics

### GET /api/analytics/resumo

**Descrição:** Obter resumo estatístico dos posts monitorados.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "totalPosts": 450,
  "postsPositivos": 210,
  "postsNegativos": 150,
  "postsNeutros": 90
}
```

### GET /api/analytics/sentimentos/semanal

**Descrição:** Obter dados de sentimentos por semana para os últimos 30 dias.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "periodo": "últimos 30 dias",
  "semanas": [
    {
      "semana": "Semana 1",
      "positivos": 45,
      "negativos": 30,
      "neutros": 25
    },
    {
      "semana": "Semana 2",
      "positivos": 52,
      "negativos": 28,
      "neutros": 20
    },
    {
      "semana": "Semana 3",
      "positivos": 60,
      "negativos": 35,
      "neutros": 15
    },
    {
      "semana": "Semana 4",
      "positivos": 53,
      "negativos": 42,
      "neutros": 30
    }
  ]
}
```

### GET /api/analytics/sentimentos/distribuicao

**Descrição:** Obter distribuição total de sentimentos.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "positivos": {
    "quantidade": 210,
    "percentual": 46.7
  },
  "negativos": {
    "quantidade": 150,
    "percentual": 33.3
  },
  "neutros": {
    "quantidade": 90,
    "percentual": 20.0
  }
}
```

### GET /api/analytics/candidatos/{id}/sentimentos

**Descrição:** Obter análise de sentimentos para um candidato específico.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "candidato": {
    "id": 1,
    "nome": "João Silva",
    "username": "@joaosilva"
  },
  "totalPosts": 120,
  "distribuicao": {
    "positivos": {
      "quantidade": 65,
      "percentual": 54.2
    },
    "negativos": {
      "quantidade": 35,
      "percentual": 29.2
    },
    "neutros": {
      "quantidade": 20,
      "percentual": 16.6
    }
  },
  "evolucaoSemanal": [
    {
      "semana": "Semana 1",
      "positivos": 15,
      "negativos": 8,
      "neutros": 5
    },
    {
      "semana": "Semana 2",
      "positivos": 18,
      "negativos": 7,
      "neutros": 4
    },
    {
      "semana": "Semana 3",
      "positivos": 16,
      "negativos": 10,
      "neutros": 6
    },
    {
      "semana": "Semana 4",
      "positivos": 16,
      "negativos": 10,
      "neutros": 5
    }
  ]
}
```

### GET /api/analytics/hashtags/{id}/sentimentos

**Descrição:** Obter análise de sentimentos para uma hashtag específica.

**Headers:**
- Authorization: Bearer {token}

**Resposta (200 OK):**
```json
{
  "hashtag": {
    "id": 1,
    "texto": "#eleicoes2025"
  },
  "totalPosts": 85,
  "distribuicao": {
    "positivos": {
      "quantidade": 35,
      "percentual": 41.2
    },
    "negativos": {
      "quantidade": 28,
      "percentual": 32.9
    },
    "neutros": {
      "quantidade": 22,
      "percentual": 25.9
    }
  },
  "evolucaoSemanal": [
    {
      "semana": "Semana 1",
      "positivos": 8,
      "negativos": 6,
      "neutros": 5
    },
    {
      "semana": "Semana 2",
      "positivos": 10,
      "negativos": 7,
      "neutros": 6
    },
    {
      "semana": "Semana 3",
      "positivos": 9,
      "negativos": 8,
      "neutros": 5
    },
    {
      "semana": "Semana 4",
      "positivos": 8,
      "negativos": 7,
      "neutros": 6
    }
  ]
}
```

## Considerações para Implementação

1. **Autenticação**: Todos os endpoints devem exigir autenticação via token JWT.
2. **Formatos de Data**: As datas devem ser fornecidas em formato brasileiro (DD/MM/AAAA) para exibição e em ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) para processamento.
3. **Paginação**: Endpoints que retornam listas devem suportar paginação para melhor performance.
4. **Cache**: Considere implementar cache para endpoints de analytics para melhorar a performance.
5. **Websockets**: Para atualizações em tempo real, considere implementar websockets para notificar o frontend sobre novos posts ou alterações em sentimentos.
6. **Rate Limiting**: Implemente rate limiting para proteger a API contra abusos.
7. **CORS**: Configure CORS apropriadamente para permitir apenas origens confiáveis.
