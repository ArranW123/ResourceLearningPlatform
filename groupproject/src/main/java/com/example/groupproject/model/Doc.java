package com.example.groupproject.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "docs")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt"},
		allowGetters = true)

public class Doc implements Serializable {

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	private String docName;

	@NotBlank
	private String docType;

	@NotBlank
	private String descriptiion;

	@Lob
	private byte[] data;

	public Doc() {

	}

	public Doc(@NotBlank String docName, @NotBlank String docType, @NotBlank String descriptiion, byte[] data) {
		super();
		this.docName = docName;
		this.docType = docType;
		this.descriptiion = descriptiion;
		this.data = data;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDocName() {
		return docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	public String getDocType() {
		return docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	public String getDescriptiion() {
		return descriptiion;
	}

	public void setDescriptiion(String descriptiion) {
		this.descriptiion = descriptiion;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

}